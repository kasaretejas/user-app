import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import Contact from './components/Contact';
import Main from './components/Main';
import Slider from './components/Slider';
import Users from './components/Users';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

const routes = createBrowserRouter([
 {
     path:'/',
     element:<Main/>,
     children:[
         {
             path:'/',
             element:<Slider/>,
             index:true
         },
         {
            path:'/contact',
            element:<Contact/>,
        },
        {
            path:'/users',
            element:<Users/>,
        }
     ]
 }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <RouterProvider router={routes}/>
);
