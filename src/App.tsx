import React from 'react';
import './App.css';
import {useRoutes} from 'react-router-dom';
import {routerConfig} from './route/routesConfig';


export const App = (): JSX.Element => {
  const routes = useRoutes(routerConfig())
  return (
    <>
      {routes}
    </>
  );
}

export default App;
