import React from "react";
import { Item } from "./Items";

interface Props {
  index: number;
  items: Item[];
  setWinner: (winnerIndex: number, loserIndex: number) => void;
}

const RatingDisplay: React.FC<Props> = (props) => {
  const { index, items, setWinner } = props;
  return (
    <>
      {items.map((item, i) => {
        if (i > index) {
          return (
            <div className="rating-display" key={i}>
              <span>
                {items[index].name} - {items[index].rating}
              </span>{" "}
              ---{" "}
              <span>
                {items[i].name} - {items[i].rating}
              </span>
              <button onClick={(): void => setWinner(index, i)}>Left</button>
              <button onClick={(): void => setWinner(i, index)}>Right</button>
            </div>
          );
        }
      })}
    </>
  );
};

export default RatingDisplay;
