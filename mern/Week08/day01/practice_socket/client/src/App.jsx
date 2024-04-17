import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import io from 'socket.io-client'
import LoginForm from './components/LoginForm'
import Chat from './components/Chat'

function App() {

  // the reason why we put in into callback function is bc we need to invoke io directly
  const [socket] = useState(() => io(':8000'))
  const [isConnected, setOsConnected] = useState(false)
  const [userName, setUserName] = useState('')

  useEffect(() => {
    console.log("connect");
    socket.on('connect', () => {
      console.log("Socket id: ", socket.id)
    });

    return () => {
      socket.disconnect(true)
      console.log("Disconnected")
    }
  }, [])


  return (
    <>
      <h1>Socket.io Practice</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginForm userName={userName} setUserName={setUserName} />} />
          <Route path='/chat' element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
