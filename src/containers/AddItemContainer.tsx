import React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";

import AddItem from "../components/AddItem";
import { AppState } from "../store/configureStore";
import { addItem } from "../actions";

interface Props {}

const AddItemContainer: React.FC<Props> = (props) => {
  return <AddItem />;
};

const mapStateToProps = (state: AppState) => ({});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  handleAddItem: (text: string): void => {
    dispatch(addItem(text));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddItemContainer);
