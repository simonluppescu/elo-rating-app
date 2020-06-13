import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import AddItems from "./AddItem";
import RankItems from "./RankItems";

interface Props {}

const Content: React.FC<Props> = () => {
  return (
    <Router>
      <Route path="/" exact component={AddItems}></Route>
      <Route path="/add" component={AddItems}></Route>
      <Route path="/rank" component={RankItems}></Route>
    </Router>
  );
};

export default Content;
