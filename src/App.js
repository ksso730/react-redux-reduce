import React from 'react';
import  {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Category from "./components/Category";
import CateFood from "./components/CateFood";
import FoodDetail from "./components/FoodDetail";

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
              <Route exact path={"/"} component={"Category"}></Route>
              <Route exact path={"/cate_food"} component={"CateFood"}></Route>
              <Route exact path={"/food_detail"} component={"FoodDetail"}></Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
