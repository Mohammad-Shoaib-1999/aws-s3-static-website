import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import LoginFormPage from './Components/LoginFormPage/LoginFormPage';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Router>
      <Routes>
      <Route exact path="/" element={<LoginFormPage />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
)
