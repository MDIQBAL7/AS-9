import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./Root.jsx";

import { createBrowserRouter } from "react-router";

import Root from "./Root.jsx";
import Home from "./Components/Home.jsx";
import Profile from "./Components/Profile.jsx";

import Logout from "./Components/Logout.jsx";
import Login from "./Components/Login.jsx";
import { RouterProvider } from "react-router/dom";
import AuthProvider from "./Context/AuthProvider.jsx";
import Registration from "./Components/Registration.jsx";
import ToyDetails from "./Components/ToyDetails.jsx";
import PrivateRoute from "./Context/PrivateRoute.jsx";
import Shopping from "./Components/Shopping.jsx";
import NotFound from "./Components/NotFound.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        loader: () => fetch("/jsonData.json"),
        Component: Home,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "logout",
        Component: Logout,
      },
      {
        path: "registration",
        Component: Registration,
      },
      {
        path: "details/:detailsid",
        loader: ({ params }) => fetch("/jsonData.json"),
        element: (
          <PrivateRoute>
            <ToyDetails></ToyDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "shoping",
        loader: () => fetch("/jsonData.json"),
        element: (
          <PrivateRoute>
            <Shopping></Shopping>
          </PrivateRoute>
        ),
      },
      
    ],
  },
  {
        path : '*',
        Component : NotFound
      }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />,
    </AuthProvider>
  </StrictMode>
);
