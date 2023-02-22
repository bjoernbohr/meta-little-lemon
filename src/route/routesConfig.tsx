import {RouteObject} from "react-router-dom";
import { Home } from "../pages/Home/Home";
import React from 'react';
import {Reservation} from '../pages/Reservation/Reservation';

export const routerConfig = (): RouteObject[] => [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/reservation',
    element:  <Reservation />,
  },
  {
    path: '*',
    element: <Home />,
  },
]
