// this is an example of the first variation and it will run on every render  

import React, { useState, useEffect } from 'react'

const LoggerComponent = () => {

    const [count, setCount] = useState(0)

    useEffect(() => {

        console.log('component rendered or count changed', { count })

    })


    return (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={() => { setCount(count + 1) }}>Increment</button>
        </div>
    )
}

export default LoggerComponent
