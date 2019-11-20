import React from "react";

interface Props {
  index: number;
  items: string[];
  ratings: number[];
  setWinner: (winnerIndex: number, loserIndex: number) => void;
}

const RatingDisplay: React.FC<Props> = (props) => {
  const { index, items, ratings, setWinner } = props;
  return (
    <>
      {items.map((item, i) => {
        if (i > index) {
          return (
            <div className="rating-display" key={i}>
              <span>
                {items[index]} - {ratings[index]}
              </span>{" "}
              ---{" "}
              <span>
                {items[i]} - {ratings[i]}
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
