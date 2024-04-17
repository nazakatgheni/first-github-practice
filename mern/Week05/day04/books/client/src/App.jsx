import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import DisplayAllBooks from './components/DisplayAllBooks'
import BookForm from './components/BookForm'
import DisplayOneBook from './components/DisplayOneBook'
import UpdatedBook from './components/UpdatedBook'

function App() {


  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<DisplayAllBooks />} />
        <Route path='/books/create' element={<BookForm />} />
        <Route path='/books/:id' element={<DisplayOneBook />} />
        <Route path='/books/edit/:id' element={<UpdatedBook />} />
      </Routes>
    </>
  )
}

export default App
