//Service for api call loader

import { BehaviorSubject } from "rxjs";

const isLoading = new BehaviorSubject(false);

export const loaderService = {
  isLoading,
  get isLoadingValue() {
    return isLoading.value;
  },
  currentLoadingStatus: isLoading.asObservable()
}