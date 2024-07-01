import { DateHelpers } from "../utils/dateUtils";
const APIs = {
  NSE: {
    getOptionChainForIndex: (index: string) =>
      `https://www.nseindia.com/api/option-chain-indices?symbol=${index}`,

    getOptionChainForEquity: (equityCode: string) => {
      return `https://www.nseindia.com/api/option-chain-equities?symbol=${equityCode}`;
    },
    getEquityHistoricalData: (
      equityCode: string,
      fromDate: string = "",
      toDate: string = ""
    ) => {
      fromDate = fromDate ?? DateHelpers.getFormattedDate();
      toDate = fromDate ?? DateHelpers.getFormattedDate();
      const filter =
        fromDate && toDate
          ? `&series=[%22EQ%22]&from=${fromDate}&to=${toDate}`
          : "";
      return (
        `https://www.nseindia.com/api/historical/cm/equity?symbol=${equityCode}` +
        filter
      );
    },
    getChartDataBySymbol: (optionCode: string) => {
      // OPTSTKHAL30-05-2024PE4000.00
      return `https://www.nseindia.com/api/chart-databyindex?index=${optionCode}`;
    },
  },
};
export default APIs;
