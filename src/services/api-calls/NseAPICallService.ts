import { AxiosResponse } from "axios";
import APIUrls from "../../constants/APIs";
import { APIService } from "../api-service";
import { IndexType } from "../../core/types/IndexType";
// import { OptionSharedService } from "../option-shared-service";

const getEquityHistoricalData = (config: any) => {
  return APIService.get(
    APIUrls.NSE.getEquityHistoricalData(
      config.symbol,
      config.fromDate,
      config.toDate
    )
  );
};

const getIndexOptionChain = (config: { indexType: IndexType }) => {
  return APIService.get(APIUrls.NSE.getOptionChainForIndex(config.indexType));
};

const getEquityOptionChain = (config: any) => {
  return APIService.get(APIUrls.NSE.getEquityHistoricalData(config.symbol));
};

const getChartDataBySymbol = (config: any) => {
  return APIService.get(APIUrls.NSE.getChartDataBySymbol(config.symbol));
};

export const ApiCallsService = {
  getEquityHistoricalData,
  getIndexOptionChain,
  getEquityOptionChain,
  getChartDataBySymbol,
};
