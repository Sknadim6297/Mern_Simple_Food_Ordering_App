import React from 'react'
import './App.css'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import { Toaster } from 'react-hot-toast'
import Success from './pages/Success'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/success" element={<Success />} />
      </Routes>
      <Toaster />
    </Router>
  )
}

export default App
