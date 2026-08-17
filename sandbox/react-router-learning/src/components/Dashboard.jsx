import React from 'react'
import { useNavigate, Outlet } from 'react-router'

const Dashboard = () => {

    const navigate = useNavigate()

    function handleClick() {
        navigate('/')
    }
    return (
        <div>
            this is the dashboard
            <button onClick={handleClick}>move to home</button>
            <Outlet />
        </div>
    )
}

export default Dashboard
