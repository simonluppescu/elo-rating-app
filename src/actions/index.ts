import { ActionNames, AddItemAction } from "../types/actionData";

export const addItem = (text: string): AddItemAction => ({
  type: ActionNames.ADD_ITEM,
  text
});
