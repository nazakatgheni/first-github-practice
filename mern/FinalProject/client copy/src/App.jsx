import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import DisplayAllFinder from './components/DisplayAllFinder'
import DisplayOneFInder from './components/DisplayOneFinder'
import EditFinder from './components/EditFinder'
import FinderForm from './components/FinderForm'



function App() {


  return (
    <>
      <BrowserRouter>
        <Nav />
        <h1 className='text-primary'>Store Finder</h1>
        <Routes>
          <Route path='/' element={<DisplayAllFinder />} />
          <Route path='/stores/add' element={<FinderForm />} />
          <Route path='/stores/:id' element={<DisplayOneFInder />} />
          <Route path='/stores/edit/:id' element={<EditFinder />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
