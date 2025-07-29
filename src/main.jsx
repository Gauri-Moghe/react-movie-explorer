import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { BrowserRouter } from "react-router-dom"
import './css/index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <BrowserRouter>  acts as a context :gives app the ability to use the routes, navigate across diff pages */}
      <App />
    {/* </BrowserRouter> */}
  </StrictMode>,
)
