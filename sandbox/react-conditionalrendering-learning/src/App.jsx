// conditional rendering is when a certain condition is met then the folloing component will be rendered otherwise not. there are 3-4 ways of doing this 

// 1. using if else 

// 2. using ternary operator ( condition ? if true : if false)

// usnig && in this if the condition before && is true then the component after && will be rendered 

import { useState } from 'react'

import './App.css'
import LogoutBtn from './components/LogoutBtn'
import LoginBtn from './components/LoginBtn'

function App() {
  const [isloggedin, setlogin] = useState(true)

  // if else 

  if (isloggedin) {

    return (
      <LogoutBtn />

    )
  }

  else {
    return (
      <LoginBtn />
    )
  }


  return (

    //  ternary operator    
    <div>

      {isloggedin ? <LogoutBtn /> : <LoginBtn />}

    </div>
  )


  // && operator
  return (
    <div>
      <h1>this is conditional rendering</h1>
      {isloggedin && <LogoutBtn />}
      {!isloggedin && <LoginBtn />}
    </div>
  )
}

export default App
