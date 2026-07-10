// lifting state means we make the parent element create, manage, change the state . this is done because there are situations where the parent has one or more child and we have to send the data from child to parent now there is a way to send the data from parent to child using props but no way to send the data from child to parent also if there are two or more children and then we have to send data from one child to another child then there is no way to send the data directly to child hence we have to send data to parent then from there ti the next child. now what state lifting does is that it gives the parent element the power to manage create chnage the state and from parent every child element can access the data

// here the app.jsx is the parent and card.jsx is the child , so we will create the state in the parent (app.jsx) ans in here only we will manage the state 
// here the data value is comming from the child (cards.jsx) and then changed in app.jsx (parent) .
// also here the card1 and card2 are the sibbling and then when we change the value in any sibling it is reflected in the other sibling because the actual change is in the parent element and that change is reflected in the child. so child changes the value and the state is changed in the parent and then that change is reflected in all the child element


import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [name, setName] = useState('')

  return (
    <div>
      <Card title="Card1" name={name} setName={setName} />
      <Card title='Card2' name={name} setName={setName} />
      <p>i am inside parnet and then name is: {name}</p>
    </div>
  )
}

export default App
