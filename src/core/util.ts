// Add methods to calculate expiry option code with symbol

import { EquityMonthlyExpiryDay, NSEHolidayList } from "./constants";
import { DayOfWeek, Exchange } from "./types/IndexType";
import { DateHelpers } from "../utils/dateUtils";

const getExpiryDateOfTheMonthForSymbol = (
  month: number,
  year: number,
  expiryDay: DayOfWeek = EquityMonthlyExpiryDay
): Date => {
  // TODO:  return the date of the month where last thursday
  // Create a date object for the last day of the given month and year
  let date = new Date(year, month, 0);

  // Find the day of the week for the last day (0 is Sunday, 1 is Monday, ..., 6 is Saturday)
  let day = date.getDay();

  // Calculate the difference between Thursday (4) and the day of the week
  let diff = day - (expiryDay as number);
  // If expiryDay is Thursday => diff
  // Sunday     - -4
  // Monday     - -3
  // Tuesday    - -2
  // Wednesday  - -1
  // Thursday   -  0
  // Friday     -  1
  // Saturday   -  2

  // If the last day of month is before Thursday, adding the +7 to get diff to goto previous thursday
  if (diff < 0) {
    diff += 7;
  }

  // Subtract the difference from the date to get the last Thursday
  date.setDate(date.getDate() - diff);

  const holidays = getTradingMarketHolidays();
  let formattedDate = DateHelpers.getFormattedDate(date);

  // Move Expiry date back if last expiry day is holiday
  // .i.e: listed holiday or weekend (Sunday/Saturday)
  while (
    holidays.indexOf(formattedDate) != -1 ||
    date.getDay() == DayOfWeek.Sunday ||
    date.getDay() == DayOfWeek.Saturday
  ) {
    date.setDate(date.getDate() - 1);
    formattedDate = DateHelpers.getFormattedDate(date);
  }

  return date;
};

const calculateEquityOptionValues = (symbol: string, month: number) => {};

const getTradingMarketHolidays = (exchange: Exchange = "NSE"): string[] => {
  let holidays: string[] = [];
  switch (exchange) {
    case "NSE":
      holidays = NSEHolidayList;
      break;
    case "BSE":
    case "MCX":
      break;
    default:
      holidays = NSEHolidayList;
  }
  return holidays;
};

export const CoreUtility = {
  getExpiryDateOfTheMonthForSymbol,
};
