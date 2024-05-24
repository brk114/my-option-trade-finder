
const trySetAuthInfo = (response: any, userTokenKey: string) => {
  let isTokenUpdated = false;
  if (
    response.data &&
    ((response.data.accessToken && response.data.refreshToken) ||
      response.data.token)
  ) {
    localStorage.setItem(userTokenKey, JSON.stringify(response.data));
    isTokenUpdated = true;
  }
  return isTokenUpdated;
};

const setValue = (storageKey: string, object: any) =>
  localStorage.setItem(storageKey, JSON.stringify(object));

// sets the local storage value for input key
const getValue = (key: string) => {
  return JSON.parse(window.localStorage.getItem(key)!);
};

const clearValue = (key: string) => {
  localStorage.removeItem(key);
};

// Note: Do not expose the local storage keys out side of this file until unless necessary
export const localStorageService = {
  setValue,
  getValue,
  clearValue,
  trySetAuthInfo,
};
