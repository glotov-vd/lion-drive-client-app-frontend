import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import '/src/assets/styles/main.scss';

import Home from "./pages/Home.jsx";
import Cars from "./pages/Cars.jsx";
import Car from "./pages/Car.jsx";
import RentConditions from "./pages/RentConditions.jsx";
import Contacts from "./pages/Contacts.jsx";

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
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
