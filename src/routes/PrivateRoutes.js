import React from 'react';
import { Route} from 'react-router-dom';



const PrivateRoute = ({
  component: Component,
  redirectTo,

  ...routeProps
}) => {
  

  return (
    <Route
      {...routeProps}
      render={props => {
        return <Component {...props} />;
      }}
    />
  );
};

export default PrivateRoute;
