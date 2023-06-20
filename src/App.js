import React from "react";
import "assets/scss/style.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "page/LandingPage";
import Example from "page/example";
import DetailsPage from "page/DetailsPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage}></Route>
        <Route exact path="/propeties/:id" component={DetailsPage}></Route>
        <Route exact path="/example" component={Example}></Route>
      </Router>
    </div>
  );
}

export default App;
