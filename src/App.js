import React from 'react'
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom'
import { SearchCharacters } from './pages/index'

function App () {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SearchCharacters />} />
      </Routes>
    </Router>
  )
}

export default App
