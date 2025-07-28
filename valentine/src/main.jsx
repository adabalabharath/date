import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AcceptanceContextProvider from './context/AcceptanceContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <AcceptanceContextProvider>
    <App />
  </AcceptanceContextProvider>,
)
