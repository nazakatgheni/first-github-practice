import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Home from './components/Home'
import Nav from './components/Nav'
import Word from './components/Word'
import Form from './components/Form'


function App() {

  return (
    <>
      <BrowserRouter>
        {/* wrap up all the routes */}
        <Nav />
        <Routes>
          {/* group up each routes */}
          <Route path='/' element={<LandingPage />} />
          {/*     this / is for landing page  element is for render component,
          in this page we're rendering Landing Page*/}
          <Route path='/home' element={<Home />} />
          <Route path='/:unicorn/:color' element={<Word />} />
          <Route path='/form' element={<Form />} />
          <Route path='/*' element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
