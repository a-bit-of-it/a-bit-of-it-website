import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import './main.css'
import './i18n'
import App from './App.jsx'
import Footer from "./Footer.jsx";
import Banner from "./components/banner/Banner.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <div className="site">
            <Banner/>
            <main className="site-content">
                <App />
            </main>
            <Footer/>
        </div>
    </BrowserRouter>
  </StrictMode>,
)
