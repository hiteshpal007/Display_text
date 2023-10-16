import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Display from './Components/Display'

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Display/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
