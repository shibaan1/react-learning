// this is an example of second variation 2 and will run on the first render only 

import React, { useState, useEffect } from 'react'

const TimerComponent = () => {

    const [seconds, setSeconds] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => {

            console.log('setinterval started')
            setSeconds(prevSeconds => prevSeconds + 1)
        }, 1000);

        return () => {
            console.log('timer stopped(unmounted form ui)')
            clearInterval(intervalId)
        }
    }, [])

    return (
        <div>
            <h1>Seconds : {seconds}</h1>
        </div>
    )
}

export default TimerComponent
