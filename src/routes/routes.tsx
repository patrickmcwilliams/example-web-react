import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home/Home";

const Routes = (props:any) => {

  return (
      <Switch>
        <Route
          exact
          path="/"
          component={Home}
        />
        <Route path="/success" 
          // component={Counter} 
          render={(props) => (<>success page</>)}
        />
        <Route path="/disqualify" 
          // component={Counter} 
          render={(props) => (<>disqualify page</>)}
        />
        <Route path="/**" 
          // component={Counter} 
          render={(props) => (<>404 page</>)}
        />
      </Switch>
  );
};


export default Routes;
