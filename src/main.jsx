import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import RootLayout from './Layout/RootLayout'
import FriendDetails from './pages/frienddetails/FriendDetails'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'

import { Toaster } from 'react-hot-toast';

import Timeline from './pages/timeline/Timeline';

import Stats from './pages/stats/Stats';

import Homepage from './pages/homepage/Homepage'
const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          // path: "/",
          index: true,
          element: <Homepage />,
        },
        {
          path: "/timeline",
          element: <Timeline />,
        },
        {
          path: "/friendDetails/:id",
          element: <FriendDetails />,
        },

        {
          path: "stats",
          element: <Stats />,
        }
          
      ],
      
      errorElement: <NotFoundPage />,
    },
  ]
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
