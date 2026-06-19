import React from 'react'

const Button = (props) => {
  return (
    <div>
        {props.children}
      <button onClick={props.HandleClick}>Click Me</button>
    </div>
  )
}

export default Button
