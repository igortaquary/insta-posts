import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from './contexts/AuthProvider';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Login } from './pages/Login';
import RedirectPage from './pages/Redirect';
import "./index.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/redirect",
    element: <RedirectPage />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);