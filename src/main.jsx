import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import '/src/assets/styles/main.scss';

import Home from "./pages/Home.jsx";
import Cars from "./pages/Cars.jsx";
import Car from "./pages/Car.jsx";
import RentConditions from "./pages/RentConditions.jsx";
import Contacts from "./pages/Contacts.jsx";
import Cabrio from './pages/Cabrio.jsx';
import Buiseness from './pages/Buiseness.jsx';
import Comfort from './pages/Comfort.jsx';
import Off_road from './pages/Off_road.jsx';
import Premium from './pages/Premium.jsx';
import Sportcars from './pages/Sportcars.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/cars',
    element: <Cars />,
  },
  {
    path: '/cars/:id',
    element: <Car />,
  },
  {
    path: '/rent-conditions',
    element: <RentConditions />,
  },
  {
    path: '/contacts',
    element: <Contacts />,
  },
  {
    path: '/cabrio',
    element: <Cabrio />
  },
  {
    path: '/buiseness',
    element: <Buiseness />
  },
  {
    path: '/comfort',
    element: <Comfort />
  },
  {
    path: '/off-road',
    element: <Off_road />
  },
  {
    path: '/premium',
    element: <Premium />
  },
  {
    path: '/sportcars',
    element: <Sportcars />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
