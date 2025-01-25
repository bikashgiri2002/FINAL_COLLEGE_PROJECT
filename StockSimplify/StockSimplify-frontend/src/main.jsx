import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './components/Home.jsx'
import Login from './components/Login.jsx'
import { ThemeProvider } from "./context/ThemeContext";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider >
    <App />
    <Home/>
    <Login/>
    </ThemeProvider>
  </StrictMode>,
)
