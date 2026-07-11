import React, { useContext } from 'react'
import { UserContext } from '../App'
import { ThemeContext } from '../App'


const ChildC = () => {

    // step:4 
    const user = useContext(UserContext)
    const { theme, setTheme } = useContext(ThemeContext)

    function handleClick() {
        if (theme === 'light') {
            setTheme('dark')

        }
        else {
            setTheme('light')
        }
    }

    return (
        <div>
            <button onClick={handleClick}>
                change theme
            </button>

            {user.name}
        </div>
    )
}

export default ChildC
