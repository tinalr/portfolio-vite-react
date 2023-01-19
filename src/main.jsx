import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ErrorPage from './error-page'
import PortfolioList from './components/PortfolioList'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage/>,
  },
  {
    path: 'portfolio',
    element: <PortfolioList />,
    children: [
      {
        path: "portfolio/:projectid",
        element: <></>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
