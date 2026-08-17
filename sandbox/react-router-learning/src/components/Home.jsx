// here the navigation hook is used to navigate to the about page and then for that we need to pass the url of the about page 

import React from 'react'
import { useNavigate } from 'react-router'

const Home = () => {
    const navigate = useNavigate()
    function handleClick() {
        navigate('/about')

    }
    return (
        <div>
            this is the home page
            <button onClick={handleClick}>move to about page</button>
        </div>
    )
}

export default Home
