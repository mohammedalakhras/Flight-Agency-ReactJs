import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Discover from './Component/discover/discover';
import RootLayout from './RootLayout';
import App from './App';
import Home from './Component/Home';
import { fetch } from './Component/fetchFromServer';
import NumberOfTicket from './Component/NumberOfTicket/NumberOfTicket';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <Home />, loader: fetch },
      { path: '/NumberOfTicket', element: <NumberOfTicket /> },
    ],
  },
]);
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
