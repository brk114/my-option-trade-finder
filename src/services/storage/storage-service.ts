import { localStorageKeys } from "../../constants/constants";
import { localStorageService as lsService } from "./local-storage-service";

export const storageService = {
  // getAccessToken,
  // getRefreshToken,
  //  getUserAuthInfo: () => localStorageService.getValue(localStorageKeys.userAuthInfo),
  isRefreshTokenRefreshing: () =>
    lsService.getValue(localStorageKeys.refreshTokenStatus).isRefreshing,
  setRefreshTokenStatus: (isRefreshing: boolean) =>
    lsService.setValue(localStorageKeys.refreshTokenStatus, {
      isRefreshing,
    }),
};
