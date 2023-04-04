import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home';
import Error from './Components/Error';
import Navbar from './Components/Navbar';
import Meals from './Components/Meals';
import { Children } from 'react';
import First from './Components/First';
import Countries from './Components/Countries';
import MealDetails from './Components/MealDetails';
import Loading from './Components/Loading';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <First></First>
      },
      {
        path: "/countries",
        element: <Countries></Countries>
      },
      {
        path: "/meals",
        element: <Meals></Meals>,
        loader: () => fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=c'),

      },
      {
        path: "/meal/:id",
        element: <MealDetails></MealDetails>,
        loader: ({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`),
      },
    ],
    errorElement: <Error />,
  },

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
