export enum ActionNames {
  ADD_ITEM = "ADD_ITEM"
}

export type AddItemAction = {
  type: ActionNames.ADD_ITEM;
  text: string;
};

export type AppActions = AddItemAction;
