// useMemo hook is used to deal with expensive operations in React. in our code there are few operations that are expensive meaning doing these operations will cost us time,resources etc so this means anytime we are doing such operations it will create some kind of performance issue , so to optimise this we use UseMemo hook, it will store the value of the operation against the given input and when the same input is used to do that operation it will simply return the stored value and not perform that task again 

// eg-- in this example we have a basic counter and in that we have a function that is there to double the given number now doublig the number is not expensive in itself but we have added the for loop in it which loops for 10000000 times before doubling the number so this function becomes an expesive operation to run when ever called and it will be called on every rernder so when the counter updates a count it rerender which calls this function and it runs again
// so we will use the useMemo here to remeber the value of the expensive function against the given input so whenever we get the rerender we react will check the memory for the input and then if it is there it will not run the expensive function just return the already solved value

// in useMemo there are two things first is the calculative function and second is the dependency list , the calculative function is the expensive function which we donot want to trigger on every rerender and the dependency list is the input for that expensive function for which we want the value to be stored once the dependency list changes the then the calculative function will trigger , so usememo will keep the value for the calculative function against the input 
// we cannot store multiple input values in the same useMemo hook it stores the last value only

import { useMemo, useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [input, setInput] = useState('')

  function ExpensiveTask(num) {
    console.log('in expensive task loop')
    for (let i = 0; i <= 1000000000; i++) { }
    return num * 2
  }

  let doublenumber = useMemo(() => ExpensiveTask(input), [input])


  return (
    <>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <p>count:{count}</p>
      <p>double:{doublenumber}</p>
      <input type="number"
        placeholder='enter the number'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </>
  )
}

export default App
