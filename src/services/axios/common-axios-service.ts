import Axios, { AxiosResponse } from "axios";
import { loaderService as loader } from "../loader-service";
import { alertServices } from "../alert-service";
// import { utilService } from "./util-service";

//variable to store api call counts
let apiCallCount = 0; 

const createAxiosInstance = (baseURL: string) => {
  return Axios.create({
    baseURL: baseURL,
    responseType: "json",
  });
};

const successResponseHandler = (response: AxiosResponse) => {
  decreaseAPICallCountAndHideLoader();
  return response;
};

const errorResponseHandler = (error: any, unAuthorizedHandler: any) => {
  decreaseAPICallCountAndHideLoader();
  let errorDetail = "";
  if (!error?.response) {
    // server unavailable
    if (error?.message === "Network Error") errorDetail = "Server unavailable";
    else {
      // errorDetail = 'Unhandled error';
      console.error(error?.toString());
      // console.log(error?.toJson());
    }
  } else if (error?.response?.status === 401) {
    return unAuthorizedHandler(error);
  } else if (
    error?.response?.status === 400 ||
    error?.response?.status === 500
  ) {
    // if (!utilService.isNullOrEmpty(error?.response?.data?.errorCode)) {
    //     /**
    //      * Recruiter unauthenticated error code handler.
    //      * This forces user to register first, before calling any API
    //      * by redirecting the user to RegisterRecruiter Component at '/recruiter/' route
    //      **/
    //     if (error?.response?.data?.errorCode == "RSU4004") {
    //         alertServices.error(error?.response?.data?.errorMessage).then(() => {
    //             window.location.pathname = routePrefix.recruiter;
    //         });
    //     }
    //     else if (error?.response?.data?.errorCode == "RSU4003") {
    //         alertServices.error(error?.response?.data?.errorMessage).then(() => {
    //             window.location.pathname = routePrefix.recruiter;
    //         });
    //     }
    //     else if (error?.response?.data?.errorCode === "SU4008") {
    //         // handling this error code in sign-up component itself
    //         // alertServices.error(error?.response?.data?.errorMessage).then(() => {
    //         //     window.location.reload();
    //         // });
    //     }
    //     return Promise.reject(error);
    // }
    // else if (error?.response.data?.traceId) {
    //     let keys = Object.keys(error?.response.data.errors);
    //     if (!utilService.isNullOrEmpty(keys))
    //         errorDetail = error?.response.data.errors[keys[0]][0];// First error message for first error property
    // }
    // else if (!utilService.isNullOrEmpty(error?.response.data?.errorMessage)) {
    //     errorDetail = error?.response.data.errorMessage;
    // }
    // else {
    errorDetail = "Some error occurred, please try again.";
    // }
  } else if (error.response?.status === 403) {
    // TODO: handle unauthorized error here
    errorDetail = "You do not have access to the requested resource. please do the needed get access.";
  } else if (error.response?.status === 404) {
    errorDetail =
      "The requested resource was not found. Please reload and try again.";
  } else {
    errorDetail = error?.response?.data?.errorMessage;
  }

  if (errorDetail) {
    alertServices.error(errorDetail);
    // let errorDialoguePromise = alertServices.error(errorDetail);

    // if (error.response?.status === 403) {
    //   errorDialoguePromise.then(() => {
    //     window.location.pathname = routePrefix.candidate;
    //   });
    // }
  }

  return Promise.reject(error);
};

const increaseAPICallCountAndShowLoader = () => {
  apiCallCount++;
  loader.isLoading.next(true);
};

const decreaseAPICallCountAndHideLoader = () => {
  apiCallCount--;
  if (apiCallCount === 0) loader.isLoading.next(false);
};

// Method to reset the api call count which leads to hide loader from the screen.
// Scenario is 401(Unauthenticated case), api calls will be in queue if token expires
//until renew token call is not responded with success if error,
// app will logout the user so in that case
// we need to set reset apiCallCount.
const resetApiCallCount = () => {
  apiCallCount = 0;
  loader.isLoading.next(false);
};

export const commonAxiosService = {
  createAxiosInstance,
  successResponseHandler,
  errorResponseHandler,
  increaseAPICallCountAndShowLoader,
  resetApiCallCount,
};
