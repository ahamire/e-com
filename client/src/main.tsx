import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Header from './components/header.tsx'
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Homepage from './components/homePage.tsx'
import Currentproduct from './components/Currentproduct.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Header/>
      <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/category/:category" element={<App />} />
          <Route path="/pr/:name" element={<Currentproduct />} />
        </Routes>
      </BrowserRouter>
  </StrictMode>,
)
