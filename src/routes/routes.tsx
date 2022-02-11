import { CircularProgress, Grid } from "@material-ui/core";
import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Approved from "../pages/Approved/Approved";
import Disqualifed from "../pages/Disqualifed/Disqualifed";
import Home from "../pages/Home/Home";
import { useAppSelector } from "../store/hooks";

const Routes = (props:any) => {
  const loading = useAppSelector((state) => state.loading.isLoading);

  return (
    <Fragment>
      {loading &&
        <Grid container style={{position:'absolute', height:'100vh'}}
            direction="column" justifyContent="center" 
            alignItems="center" spacing={2}
        >
          <CircularProgress size={100} thickness={5} />
        </Grid>
      }
      <Switch>
        <Route
          exact
          path="/"
          component={Home}
        />
        <Route path="/success" 
          component={Approved}
        />
        <Route path="/disqualify" 
          component={Disqualifed}
        />
        <Route path="/**" 
          // component={Counter} 
          render={(props) => (<>404 page</>)}
        />
      </Switch>
    </Fragment>

  );
};


export default Routes;
