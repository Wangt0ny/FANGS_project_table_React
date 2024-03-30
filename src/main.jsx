import React from 'react'
import ReactDOM from 'react-dom/client'
import APP from './App'
import { BrowserRouter as Router } from "react-router-dom";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <APP />
    </Router>
  </React.StrictMode>,
)
