export const findIdFromUrl = (url: string) => {
  const url_array = url.split("/");
  const last_segment = url_array[url_array.length - 2];

  return last_segment;
};

export const getLocalStorageItem = (key: string) => localStorage.getItem(key);
export const setLocalStorageItem = (key: string, value: any) => localStorage.setItem(key, value);
