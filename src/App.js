import React from 'react'
import Home from './containers/Home'
import NavBar from './components/NavBar'
import ProjectDetails from './components/ProjectDetails'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

function App () {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          path='/'
          exact
          element={<Home />}
        />
        <Route
            path='/project/:id'
            element={<ProjectDetails />}
          />
      </Routes>
    </Router>
  )
}

export default App
