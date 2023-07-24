import React from "react";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "page/LandingPage";
import DetailsPage from "page/DetailsPage";
import Checkout from "page/Checkout";
import NotFound from "page/404";

import "assets/scss/style.scss";

const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL,
});

function App() {
  return (
    <div className="App" history={history} basename={process.env.PUBLIC_URL}>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage}></Route>
          <Route exact path="/propeties/:id" component={DetailsPage}></Route>
          <Route path="/checkout" component={Checkout}></Route>
          {/* <Route exact path="/example" component={Example}></Route> */}
          <Route exact path="*" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
