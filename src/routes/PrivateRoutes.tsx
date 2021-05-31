import { Redirect, Route } from "react-router-dom";
import {
  hasRoleAccess,
  getAuthHeader,
  getRolePermissions,
  logout,
} from "../helpers/auth";

const RoleHomePage = {
  client: "/",
  admin: "/",
};

interface PrivateRouteProps {
  component: React.ElementType;
  module: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  module,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) => {
      if (!getAuthHeader()) {
        logout();
      }

      if (!hasRoleAccess(module)) {
        return (
          <Redirect
            // to={{ pathname: RoleHomePage[getRolePermissions().role] }}
            to={"/"}
          />
        );
      }
      // authorised so return component
      return <Component {...props} />;
    }}
  />
);

export default PrivateRoute;
