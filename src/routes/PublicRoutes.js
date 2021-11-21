import React from 'react';
import { Route } from 'react-router-dom';


const PublicRoute = ({
  component: Component,
  redirectTo,

  ...routeProps
}) => {
  
  return (
    <Route
      {...routeProps}
      render={props =>
         <Component {...props} />
      }
    />
  );
};

export default PublicRoute;
