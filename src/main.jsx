import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import { AppBook } from './components/books.jsx'
// import Product from './components/Product.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <AppBook />
  </React.StrictMode>,
)
