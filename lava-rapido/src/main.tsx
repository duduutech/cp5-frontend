import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import Home from './pages/Home.tsx'
import Agendamentos from './pages/Agendamentos.tsx'
import Sobre from './pages/Sobre.tsx'
import Precos from './pages/Precos.tsx'
import Erro from './pages/Erro.tsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Erro />,
    children: [
      { index: true, element: <Home /> },
      { path: 'precos', element: <Precos /> },
      { path: 'agendamentos', element: <Agendamentos /> },
      { path: 'sobre', element: <Sobre /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)