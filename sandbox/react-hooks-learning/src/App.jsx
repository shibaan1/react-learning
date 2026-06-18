// hooks are the react functions that help us to use the functionalities of the react like statemanagement lifecycle etc. we can access the functionality with the help of hooks. it is just a utility using which we can hook onto the features provided by the react

// in react every component can have a state associated with it eg a counter component can have a state of 2 counts or 50 counts or button can have a state of clicked state. this management of the state of the component is done by the usestate hook, it provides two things state variable which stores the current state of the component and state function which is used to change the state of the component 


import { useState } from 'react'
import Counter from './components/counter'

import './App.css'

function App() {
 

  return (
   <div>
   <Counter />
   </div>
  )
}

export default App
