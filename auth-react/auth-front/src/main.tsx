import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter,Route,RouterProvider } from 'react-router-dom'
import Signup from './routes/signup.tsx'
import Login from './routes/login.tsx'
import Dashboard from './routes/dashboard.tsx'
import ProtectedRoute from './routes/ProtectedRoute.tsx'
import { AuthProvider } from './auth/AuthProvider.tsx'

const router= createBrowserRouter([{
  path: "/",
  element:<Login/>
  
},{
  path: "/Signup",
  element:<Signup/>
  
},{
  path: "/",
  element:<ProtectedRoute/>,
  children:[
    {
      path:"/Dashboard",
      element:<Dashboard/>
    }
  ]
  
}

]);

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  </React.StrictMode>,
)
