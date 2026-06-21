// hooks are the react functions that help us to use the functionalities of the react like statemanagement lifecycle etc. we can access the functionality with the help of hooks. it is just a utility using which we can hook onto the features provided by the react

// in react every component can have a state associated with it eg a counter component can have a state of 2 counts or 50 counts or button can have a state of clicked state. this management of the state of the component is done by the usestate hook, it provides two things state variable which stores the current state of the component and state function which is used to change the state of the component 

// if we create a component and the text or material or elements present between the closing and opening tag of the component is the children of the component .the app is the parent component here
// eg ) here it is the h1 and the p  

// we can seprtaely define the children using children = '...' but it will be overwritten by the text inside the closing and opening tag

// we can pass a whole function to child from parent 


import { useState } from 'react'
import Counter from './components/counter'
import Card from './components/card'
import Button from './components/button'

import './App.css'

function App() {

  const [State , Setstate] = useState(0)

  const HandleClick = () => {
    Setstate(State+1)
  }


  return (
    <div>
      <Button HandleClick = {HandleClick} 
       ><h1>{State}</h1>
       </Button>
       <Counter />
      <Card> 
        <h1>hello</h1>
        <p>this is shibaan askari</p>
        <p>this is card 1</p>
      </Card>

      <Card >
        this is card 2
      </Card>

      <Card children='this is card3 child defined seprately'>
        {/* this is card 3*/ }
      </Card> 
     
    </div>
  )
}

export default App
