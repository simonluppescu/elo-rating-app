import React, { Component } from "react";
import AddItem from "./AddItem";
import RatingDisplay from "./RatingDisplay";

export interface Item {
  name: string;
  rating: number;
}
interface Props {}
interface State {
  items: Item[];
}

class Items extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      items: [
        { name: "Apples", rating: 1400 },
        { name: "Oranges", rating: 1400 },
        { name: "Pineapple", rating: 1400 },
        { name: "Nectarines", rating: 1400 },
        { name: "Bananas", rating: 1400 },
        { name: "Pomegranate", rating: 1400 }
      ]
    };

    this.addItem = this.addItem.bind(this);
    this.setWinner = this.setWinner.bind(this);
  }

  addItem(value: string): void {
    this.setState((state) => ({ items: [...state.items, { name: value, rating: 1400 }] }));
  }

  setWinner(winnerIndex: number, loserIndex: number): void {
    this.setState((state) => {
      const newItems = [...state.items];
      const { newWinnerRating, newLoserRating } = this.calculateNewRatings(
        state.items[winnerIndex].rating,
        state.items[loserIndex].rating
      );
      newItems[winnerIndex].rating = newWinnerRating;
      newItems[loserIndex].rating = newLoserRating;
      return { items: newItems };
    });
  }

  calculateNewRatings(winnerRating: number, loserRating: number): { newWinnerRating: number; newLoserRating: number } {
    const K = 32;
    const transformedW = Math.pow(10, winnerRating / 400);
    const transformedL = Math.pow(10, loserRating / 400);
    const expectedW = transformedW / (transformedW + transformedL);
    const expectedL = transformedL / (transformedW + transformedL);
    const newWinnerRating = Math.round(winnerRating + K * (1 - expectedW));
    const newLoserRating = Math.round(loserRating + K * (0 - expectedL));

    return { newWinnerRating, newLoserRating };
  }

  render(): React.ReactNode {
    const sorted = this.state.items.slice().sort((a, b) => b.rating - a.rating);
    return (
      <div>
        {sorted.map((item, index) => (
          <p key={index}>
            {item.name} - {item.rating}
          </p>
        ))}
        <AddItem addItem={this.addItem} />
        {this.state.items.map((item, index) => (
          <RatingDisplay key={index} index={index} items={this.state.items} setWinner={this.setWinner}></RatingDisplay>
        ))}
      </div>
    );
  }
}

export default Items;
