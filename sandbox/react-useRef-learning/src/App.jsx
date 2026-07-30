// useRef id the react hook that gives us the box that holds the value across the rerenders , meaning in react when an object is rerendered the value also resets but in order to store the original value in the object or we can say when we do not want the value to be reseted during the rerender then we use useRef . also during the change in normal state it triggers the rerender but when the useRef value is changed it does not triggers the rerender

// there are two probelems that useRef solves
// 1. it is used to store the value that we dont want to change
// 2. it is used to access the DOM content directly --> eg-- here we can understand this like that we can use a button to change the color of other button without actually accessing the button whose color needs to be changed , we donot have to do anything like getelementbyid , querryselector etc  

// for manipulating the the dom element we need to get the reference of that element , then we will link the reference to the element we are using to trigger the change

// useRef hook return an Object, there are many fields in this object and among those fileds there is a filed named .current which is used to insert and retrieve the data from the useRef 

import { useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // initialting the useRef and here we give the intial value --> 0
  let val = useRef(0)

  let btnref = useRef()  // creating the button refrence 



  function handleIncrement() {

    // 1st useCase --> using the useRef variable to as variable.current

    val.current = val.current + 1
    console.log('value is:', val.current)


    setCount(count + 1)
  }

  // this function will use the reference and change the reference in the place where this refrenece is pointing to
  function changeColor() {
    btnref.current.style.backgroundColor = 'red';
  }

  useEffect(() => {
    console.log('it has been renderd')
  },)

  return (
    <>
      <button

        ref={btnref} // using the reference we have created above to link it it to the desired element 
        onClick={handleIncrement}>increment</button>

      {/* here we want that on clicking the change increment color the color of the increment button changes directly so in a way we can say that the dom element (increment button) is directly changed without using id class oe anything the increment button  */}

      <button onClick={changeColor}>change increment color</button>
      <br />
      <p>count is : {count}</p>

    </>
  )
}

export default App