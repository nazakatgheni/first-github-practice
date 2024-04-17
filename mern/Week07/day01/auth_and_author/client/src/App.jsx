import { useState } from 'react'
import './App.css'
import RegistrationForm from './components/RegistrationForm'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import LoginForm from './components/LoginForm'

function App() {

  // props drilling - we pass all the info from parents to all the child components
  const [loggedInUser, setLoggedInUser] = useState({})

  const saveExistingUsers = userData => {
    const userObj = { ...userData, password: "" };
    setLoggedInUser(userObj);
  }

  return (
    <>
      {/*  this part is called props drilling */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<RegistrationForm saveExistingUsers={saveExistingUsers} />} />
          <Route path='/dashboard' element={<Dashboard loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />} />
          <Route path='/login' element={<LoginForm saveExistingUsers={saveExistingUsers} />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
