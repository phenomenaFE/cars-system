import React from 'react';
import { createBrowserRouter } from 'react-router-dom'
import App from '../App';
import Cars from "../Pages/Cars";
import Categories from "../Pages/Categories";
import Home from "../Pages/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/Cars",
          element: <Cars />,
        },
        {
          path: "/Cars/:id",
          element: <>product detail</>,
        },
        {
          path: "/Categories",
          element: <Categories />,
        },
        {
          path: "/Categories/:id",
          element: <>Categories detail</>,
        },
      ],
    },
  ]);
export default router

