// here we have imported the user card and we will use the usercard functions as many times as we want the no of cards 

import { useState } from 'react'
import './App.css'
import UserCard from './components/usercard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>

      <UserCard />
      <UserCard />
      <UserCard />
  
    </div>
  )
}

export default App
