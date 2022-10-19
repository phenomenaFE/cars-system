import React from 'react';
import { createBrowserRouter } from 'react-router-dom'
import Categories from '../../Pages/Categories';
import Favourites from '../../Pages/Favourites';
import Home from '../../Pages/Home';
import Cars from '../../Pages/Cars';

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Home />,
        },
        {
            path: '/Cars',
            element: <Cars />,
        },
        {
            path: '/Cars/:id',
            element: <>product detail</>
        },
        {
            path: '/Categories',
            element: <Categories />,
        },
        {
            path: '/Categories/:id',
            element: <>Categories detail</>
        },
       
      
    ]
)
export default router

