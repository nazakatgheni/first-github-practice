import { useState } from 'react'
import './App.css'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import People from './components/People'

function App() {


  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/people' element={<People />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
