import React from "react";
import { Button } from "semantic-ui-react";

interface Props {}

const RankItems: React.FC<Props> = () => {
  return (
    <div>
      Rank items <Button>Rank</Button>
    </div>
  );
};

export default RankItems;
