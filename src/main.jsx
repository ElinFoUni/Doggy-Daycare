import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createHashRouter, RouterProvider } from 'react-router'
import Catalog from './Routes/Catalog.jsx'
import DetailedView from './Routes/DetailedView.jsx'

const router = createHashRouter([
  { path: '/', 
    Component: App ,
  }, 
  { path: '/catalog', 
    Component: Catalog ,
  }, 
  { path: '/detailed-view', 
    Component: DetailedView ,
  }, 
    
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
