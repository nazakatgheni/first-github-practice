import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
// we can wrap BrowserRoutes in main.jsx or app.jsx
// in main,jsx we add <BrowserRoutes/> in <React.StrictMode> then import BR