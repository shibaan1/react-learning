// wraping the child in react.memo. if we send a function to the child wrapped in the react.memo then it wont stop the rerender of the child


import React from 'react'

const Child1 = React.memo(
    (props) => {
    console.log('child component rerender')
  return (
    <div>
      <button onClick={props.handleClick}>{props.Name}</button>
    </div>
  )
}
)

export default Child1
