import { AxiosRequestConfig } from "axios";
import { commonAxiosService } from "./common-axios-service";
import { storageService as storage } from "../storage/storage-service";

// For any non-cloud jobs api we should not send the token to the api.
// Hence create a new instance with respective base URL
const customerAxiosInstance = commonAxiosService.createAxiosInstance(
    process.env.REACT_APP_API_URL || ""
);

storage.setRefreshTokenStatus(false);


export default customerAxiosInstance;