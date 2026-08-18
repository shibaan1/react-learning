// useCallback is used to memorize the reference of the function . there are two uses of useCallback

//1. when we do not want unnesecary rernder of the child component, we wrap the child component in the react.Memo
// here in this exapmle we have the child1 and when we click the increment button the state changes and the child also rerenders but it is unnesecary because the child has nothing to do with it. when we wrap our component in the react.Memo it will stop rerendering and will rerender only when the props are changed  .
//  the limmitation of the react.Memo is that when we send the function as the prop to the child then it trigger the rerender and then this happends because the rerender creates the new function and this means the function reference will be different after the rerender and hence this means the props change
// now to solve this probelem we use useCallback, useCallback freezez the reference of the function, we wrap the function passed as the prop in the useCallback, in the dependency list we pass the element which will trigger the function call upon change

//2. we use useCallback for handling expensive operations, we wrap our expensive function in the useCallback so when there is rerender the function will not be created again it will only run , useCallback does not stop the function execution like usememo rather it stops the unnsecar recreation of the function


import { useCallback, useState } from 'react'

import './App.css'
import Child1 from './component/Child1'
import ExpensiveComponent from './component/ExpensiveComponent'

function App() {
  const [count, setCount] = useState(0)

  const handleClick = useCallback(() => {
    setCount(count + 1)
  }, [count]
  )

  return (
    <>
    < ExpensiveComponent/>
      <p>count: {count}</p>
      <br />
      <button onClick={handleClick}>increment</button>

      <br />
      <div>
        <Child1 Name='Click Me1' handleClick={handleClick} />
      </div>
    </>
  )
}

export default App
