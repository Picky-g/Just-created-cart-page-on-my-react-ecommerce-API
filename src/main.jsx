import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ProductContext from './context/ProductContext.jsx'
import { ToastContainer } from 'react-toastify';
import CartContext from './context/CartContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BrowserRouter>
      <ProductContext>
        <CartContext>
          <App />
        </CartContext>
        <ToastContainer />
      </ProductContext>
    </BrowserRouter>
  </StrictMode>,
)
