import { utilService } from "./util-service";
import commonAxiosInstance from "./axios/common-axios-instance";
import { AxiosResponse } from "axios";

const axiosInstance = commonAxiosInstance;

const axiosResponseHandler = (response: AxiosResponse<any, any>) => {
  return response.data;
};

/**
 * http utils for calling APIs will start from here
 **/
const get = (url: string, config?: any) => {
  return axiosInstance
    .get(url, { ...(config ? config : {}) })
    .then(axiosResponseHandler);
};

const getByParam = (url: string, param: any) => {
  return axiosInstance.get(url, {
    params: { ...param },
  });
};

const post = (url: string, data: any) => {
  return axiosInstance.post(url, data);
};

const postWithoutParam = (url: string) => {
  return axiosInstance.post(url);
};

const postWithCustomResponseType = (
  url: string,
  data: any,
  responseTypeValue: any
) => {
  return axiosInstance.post(url, data, { responseType: responseTypeValue });
};

const uploadFile = (fileUploadUrl: any, fileToUpload: File) => {
  const formData = new FormData();
  formData.append("file", fileToUpload, fileToUpload.name);
  return axiosInstance.post(fileUploadUrl, formData);
};

const deleteObject = (url: any) => {
  return axiosInstance.delete(url);
};

const deleteWithBody = (url: any, data: any) => {
  return axiosInstance.delete(url, { data });
};

export const APIService = {
  get,
  getByParam,
  post,
  postWithoutParam,
  postWithCustomResponseType,
  uploadFile,
  deleteObject,
  deleteWithBody,
};
