import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Signin from './auth/signin/signin.jsx'
import Home from './Home/home.jsx'
import Dashboard from './dashboard/dashboard.jsx'
import { ClerkProvider } from '@clerk/clerk-react'
import EditResume from './dashboard/resume/[resumeid]/edit/index.jsx'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

const router = createBrowserRouter([
  {
    element: <App/>,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard/>
      },
      {
        path: '/dashboard/resume/:resumeid/edit',
        element: <EditResume/>
      }
    ]
  },
  {
    path:'/auth/signin',
    element: <Signin/>
  },
  {
    path: '/',
    element: <Home/>
  },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
        <RouterProvider router={router}/>
      </ClerkProvider>
  </StrictMode>,
)
