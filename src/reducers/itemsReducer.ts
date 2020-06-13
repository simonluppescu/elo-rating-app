import produce from "immer";

import { AppActions, ActionNames } from "../types/actionData";

const itemsReducer = (state: Array<string>, action: AppActions): Array<string> => {
  switch (action.type) {
    case ActionNames.ADD_ITEM:
      return produce(state, (newState) => {
        newState.push(action.text);
      });

    default:
      return state;
  }
};

export default itemsReducer;
