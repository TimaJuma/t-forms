import React from "react";
import { Redirect, Route } from "react-router-dom";
// import {
//   hasModulePermission,
//   getAuthHeader,
//   getRolePermissions,
//   logout,
// } from "../helpers/Authorization";

// Different role has different home page
const RoleHomePage = {
  executive: "/",
  operator: "operators",
  manager: "/",
  admin: "/",
};

const PrivateRoute = ({ component: Component, module, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      if (!!!getAuthHeader()) {
        // not logged in so redirect to login page with the return url
        logout();
      }

      // check if route is restricted by role
      if (!hasModulePermission(module)) {
        // role not authorised so redirect to role's home page
        return (
          <Redirect
            to={{ pathname: RoleHomePage[getRolePermissions().role] }}
          />
        );
      }
      // authorised so return component
      return <Component {...props} />;
    }}
  />
);

export default PrivateRoute;
