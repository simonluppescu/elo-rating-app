import React, { Component } from "react";
import AddItem from "./AddItem";
import RatingDisplay from "./RatingDisplay";

interface Props {}
interface State {
  items: string[];
  ratings: number[];
}

class Items extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      items: ["Apples", "Oranges", "Pineapple", "Nectarines", "Bananas", "Pomegranate"],
      ratings: [100, 100, 100, 100, 100, 100]
    };

    this.addItem = this.addItem.bind(this);
    this.setWinner = this.setWinner.bind(this);
  }

  addItem(value: string): void {
    this.setState((state) => ({ items: [...state.items, value] }));
    this.setState((state) => ({ ratings: [...state.ratings, 1000] }));
  }

  setWinner(winnerIndex: number, loserIndex: number): void {
    this.setState((state) => {
      const newRatings = [...state.ratings];
      const { newWinnerRating, newLoserRating } = this.calculateNewRatings(
        state.ratings[winnerIndex],
        state.ratings[loserIndex]
      );
      newRatings[winnerIndex] = newWinnerRating;
      newRatings[loserIndex] = newLoserRating;
      return { ratings: newRatings };
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
    return (
      <div>
        {this.state.items.map((item) => (
          <p key={item}>{item}</p>
        ))}
        <AddItem addItem={this.addItem} />
        {this.state.items.map((item, index) => (
          <RatingDisplay
            key={index}
            index={index}
            items={this.state.items}
            ratings={this.state.ratings}
            setWinner={this.setWinner}
          ></RatingDisplay>
        ))}
      </div>
    );
  }
}

export default Items;
