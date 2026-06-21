// the forst useefect will run inly when the count is change but the second useeffect will run only on the first render

import React, { useState, useEffect } from 'react'

const MultiEffectComponent = () => {

    const [count, setCount] = useState(0)
    const [seconds, setSeconds] = useState(0)

    useEffect(() => {
        console.log('count changed', count)

    }, [count])

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log('set interval started')
            setSeconds(prevSeconds => prevSeconds + 1)

        }, 1000);

        return () => {
            console.log('time to stop')
            clearInterval(intervalId)
        }
    }, [])


    return (
        <div>
            <h1>count : {count} </h1>
            <button onClick={() => { setCount(count + 1) }}>increment</button>
            <h2>seconds : {seconds}</h2>
        </div>
    )
}

export default MultiEffectComponent
