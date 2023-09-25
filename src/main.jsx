import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home';
import DonationDetails from './components/DonationDetails/DonationDetails';
import Donation from './components/Donation/Donation';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element:<Home></Home>
        // loader: () => fetch('category_cards.json')
      },
      {
        path: '/donation',
        element:<Donation></Donation>,
        loader: () => fetch('../public/category_cards.json')
      },
      {
        path: '/statistics',
        element:<Home></Home>
      },
      {
        path: '/home/:id',
        element:<DonationDetails></DonationDetails>,
        loader: () => fetch('../public/category_cards.json')
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
