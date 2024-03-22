import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainSec from './components/MainSec.jsx'
import Projects from './pages/Projects.jsx'
import Livestream from './pages/Livestream.jsx'

const router = createBrowserRouter([

  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MainSec />
      },
      {
        path: "/projects",
        element: <Projects />
      },
      {
        path: "/livestream",
        element: <Livestream />
      }
    ]

  }

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
