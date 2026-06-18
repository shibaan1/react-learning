// here we have imported the user card and we will use the usercard functions as many times as we want the no of cards 
// props are the data that we send from one component to another in react 
// here name is the prop we have set different prop for diffrent cards here and then on the usercard.jsx we have written props.name
// to pass the image as a prop we will not pass it ass the string rather as the image 
// also we can style the elements in the same format using style using props 

import { useState } from 'react'
import './App.css'
import UserCard from './components/usercard'
import randompic1 from './assets/randompic1.jfif'
import randompic2 from './assets/randompic2.jfif'
import randompic3 from './assets/randompic3.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>

      <UserCard name='shibaan Askari' desc='description 1' image={randompic1} style={{ 'border-radius': '10px' }} />
      <UserCard name='john doe' desc='description 2' image={randompic2} style={{ 'border-radius': '10px' }} />
      <UserCard name='steve smith' desc='description 3' image={randompic3} style={{ 'border-radius': '10px' }} />

    </div>
  )
}

export default App
