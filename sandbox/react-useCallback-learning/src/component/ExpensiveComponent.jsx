// we wrapped expensive calculaion in the useCallback 

import React, { useCallback, useState } from 'react'

const ExpensiveComponent = () => {
    const [count , setCount] = useState(0)
    const [text ,setText] = useState('')

    const expensiveCalculation = useCallback(
         () => {
        console.log('running expensive calculation')
        let result = 0
        for (let i=0; i<100000000;i++){
            result +=i
        }
        return result
    }, [count]
    )

    
  return (
    <div>
      <input type="text" 
      value = {text}
      onChange={(e)=>setText(e.target.value)}
      placeholder = 'type Text' />

      <p>expensive Calculation result:{expensiveCalculation()}</p>
      <button onClick={()=>setCount(count+1)}>increment count</button>
    </div>
  )
}

export default ExpensiveComponent
