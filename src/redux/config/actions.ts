import { localStorageKeys } from "helpers/constants";
import { setLocalStorageItem } from "helpers/utils";
import { TOGGLE_DARKMODE } from "redux/actionTypes";

export const toggleDarkMode = (darkMode?: boolean) => (dispatch: any) => {
  setLocalStorageItem(localStorageKeys.DARK_MODE, darkMode);

  dispatch({ type: TOGGLE_DARKMODE, payload: darkMode });
};
