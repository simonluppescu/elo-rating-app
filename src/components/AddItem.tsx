import React, { ChangeEvent } from "react";
import { stat } from "fs";

interface Props {
  addItem(value: string): void;
}
interface State {
  value: string;
}

class AddItem extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(): void {
    this.props.addItem(this.state.value);

    this.setState({ value: "" });
  }

  handleChange(event: ChangeEvent): void {
    const target = event.target as HTMLInputElement;

    this.setState({ value: target.value });
  }

  render(): React.ReactNode {
    return (
      <div>
        <input type="text" value={this.state.value} onChange={this.handleChange}></input>
        <button onClick={this.handleAdd}>Add</button>
      </div>
    );
  }
}

export default AddItem;
