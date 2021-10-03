import { TOGGLE_DARKMODE } from "redux/actionTypes";
import { Action, ConfigState } from "types/redux";

const initialState: ConfigState = {
  darkMode: false,
};

const configReducer = (state = initialState, action: Action): ConfigState => {
  const { payload, type } = action;

  switch (type) {
    case TOGGLE_DARKMODE:
      return {
        darkMode: payload,
      };

    default:
      return state;
  }
};

export default configReducer;
