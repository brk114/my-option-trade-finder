export type Exchange = "NSE" | "BSE" | "MCX";

export type IndexType =
  | "NIFTY"
  | "BANKNIFTY"
  | "FINNIFTY"
  | "MIDCPNIFTY"
  | "SENSEX"
  | "BANKEX";

export type WeekDay =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday";

  /**
   * Enum to define day name of week: 
   * 0 is Sunday, 1 is Monday, ..., 6 is Saturday
   */
export enum DayOfWeek {
  Sunday, 
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}
