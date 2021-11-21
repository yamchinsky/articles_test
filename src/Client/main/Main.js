import React, { Suspense } from 'react';
import { Switch } from 'react-router';


import AppLoader from '../../shared/components/loader/Loader';
import { mainRoutes } from '../../routes/mainRoutes';
import PrivateRoutes from '../../routes/PrivateRoutes';
import PublicRoutes from '../../routes/PublicRoutes';

import './Main.scss';

const Main = () => {
  

  
 

  return (
    <>
      <div className='main-wrapper'>
        <Suspense fallback={<AppLoader />}>
          <Switch>
            {mainRoutes.map(route =>
              route.isPrivate ? (
                <PrivateRoutes
                  {...route}
                  redirectTo={route.redirectTo}
                  key={route.name}
                />
              ) : (
                <PublicRoutes
                  {...route}
                  redirectTo={route.redirectTo}
                  key={route.name}
                />
              )
            )}
          </Switch>
        </Suspense>
      </div>
    </>
  );
};

export default Main;