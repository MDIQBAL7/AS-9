import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Root.jsx'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Root.jsx';
import Home from './Components/Home.jsx';
import Profile from './Components/Profile.jsx';

import Logout from './Components/Logout.jsx';
import Login from './Components/Login.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component : Root,
    children : [
      {
        index : true, Component :Home 
      }, 
      {
        path : '/profile', Component : Profile
      },
      {
        path : 'login', Component : Login
      },
      {
        path : 'logout', Component : Logout
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
   <RouterProvider router={router} />,
)
