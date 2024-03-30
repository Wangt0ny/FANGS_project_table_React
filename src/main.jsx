import React from 'react'
import ReactDOM from 'react-dom/client'
import APP from './App'
import { BrowserRouter as Router } from "react-router-dom";
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <APP />
    </Router>
  </React.StrictMode>,
)
