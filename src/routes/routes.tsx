import React from "react";
import { Route, Switch } from "react-router-dom";

const Routes = (props:any) => {

  return (
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (<>landing page</>)}
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
