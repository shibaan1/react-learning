// here the children is used for the things inside the opening and closing tag of the card . we can use destructuring too 


import React from 'react'

const Card = (props) => {
  return (
    <div>

        {props.children}
      
    </div>
  )
}

export default Card
