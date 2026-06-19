// here the const [ count , setcount ] is the usestate hook in which the count is the state variable and the setcount is the state function. usestate(0) indicates the current state of the hook

// here in this eg we have created a counter in which the we have used the usestate hook and the initial value of that is set to 0. now when the button is clicked the inside arrow fxn is executed and that function has the setcount fxn which when executes increases the count by 1. we used onclick as eventlistner.

// here we have just updated the value od the count and the value will be update for the element everywhere , we donot have to fetch the element again 


import React, { useState } from 'react'
import './counter.css'

const Counter = () => {
    const [count, setcount] = useState(0)
    return (
        <div className='counter'>
            <p id='para'>you have clicked {count} times</p>
            <button id='btn' onClick={() => { setcount(count + 1) }}>Click me</button>

        </div>
    )
}

export default Counter
