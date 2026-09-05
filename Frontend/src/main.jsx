import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import './i18n'
import App from './App.jsx'
import Footer from "./Footer.jsx";
import Banner from "./Banner.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <Banner/>
        <App />
        <Footer/>
    </BrowserRouter>
  </StrictMode>,
)
