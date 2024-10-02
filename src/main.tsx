import React from 'react'
import ReactDOM from 'react-dom/client'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { MainPage } from '~/pages/MainPage'
import { TradePage } from '~/pages/TradePage'
import { TsCalculatorPage } from '~/pages/TsCalculatorPage'

import './index.css'

const router = createBrowserRouter([
  { path: '/', element: <MainPage /> },
  { path: '/trade', element: <TradePage /> },
  { path: '/ts-calculator', element: <TsCalculatorPage /> },
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
