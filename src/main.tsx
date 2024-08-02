import React from 'react'
import ReactDOM from 'react-dom/client'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { MainPage } from '~/pages/MainPage'

import './index.css'
import { TradePage } from './pages/TradePage'

const router = createBrowserRouter([
  { path: '/', element: <MainPage /> },
  { path: '/trade', element: <TradePage /> },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <Helmet>
        <title>Magic Fan in Japan</title>
      </Helmet>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>,
)
