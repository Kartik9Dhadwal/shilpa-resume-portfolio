import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// This targets the 'root' div in your index.html and renders the App component
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)