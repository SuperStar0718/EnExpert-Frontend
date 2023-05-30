import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  var id = localStorage.getItem("token");

  return (
    <Route
      {...rest}
      render={(props) =>
        id && localStorage.hasOwnProperty("token") ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
