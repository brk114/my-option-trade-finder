import { IndexType, DayOfWeek } from "./types/IndexType";

export const DaysOfWeek = 7;
export const EquityMonthlyExpiryDay = DayOfWeek.Thursday;
export const IndexMonthlyExpiryDay = DayOfWeek.Thursday;

export const IndexExpiryDay = (indexType: IndexType): DayOfWeek => {
  let expiryDayOfWeek: DayOfWeek = DayOfWeek.Monday;

  switch (indexType) {
    case "BANKEX":
    case "MIDCPNIFTY":
      expiryDayOfWeek = DayOfWeek.Monday;
      break;

    case "FINNIFTY":
      expiryDayOfWeek = DayOfWeek.Tuesday;
      break;

    case "BANKNIFTY":
      expiryDayOfWeek = DayOfWeek.Wednesday;
      break;

    case "NIFTY":
      expiryDayOfWeek = DayOfWeek.Thursday;
      break;

    case "SENSEX":
      expiryDayOfWeek = DayOfWeek.Thursday;
      break;

    default:
      throw new Error("Invalid index type" + indexType);
  }
  return expiryDayOfWeek;
};

export const NSEHolidayList = [
  "26-01-2024",
  "08-03-2024",
  "25-03-2024",
  "29-03-2024",
  "11-04-2024",
  "17-04-2024",
  "01-05-2024",
  "17-06-2024",
  "15-08-2024",
  "02-10-2024",
  "01-11-2024",
  "15-11-2024",
  "25-12-2024",
];
