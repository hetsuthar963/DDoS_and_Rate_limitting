import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios';
import { Turnstile } from '@marsidev/react-turnstile'

import './App.css'

function App() {
  const [token, setToken] = useState<string>("")

  return (
    <>
    {/* {token} */}
      <input placeholder='OTP'></input>
      <input placeholder='New Password'></input>

      <Turnstile onSuccess={(token) => {
        setToken(token)
      }} siteKey='0x4AAAAAABvWvspSGLflo9s5'/>

      <button onClick={() => {
        axios.post("http://localhost:3000/reset-password", {
          email: "hetsuthar32@gmail.com",
          otp: "123465",
          token: token
        })
       
      }}>Update password</button>
    </>
  )
}

export default App
