import React from 'react';
import {privateRoutes, publicRoutes} from "../../router/routes";
import {Redirect, Route, Switch} from "react-router-dom";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const AppRouter = () => {
  const isAuth = useTypedSelector(state => state.auth.isAuth);

  const routes = isAuth ? privateRoutes : publicRoutes;

  return (
    <Switch>
      {routes.map(route => (
        <Route
          key={route.path}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
      {!isAuth && <Redirect to="/login" />}
      {isAuth && <Redirect to="/profile" />}
    </Switch>
  );
};

export default AppRouter;
