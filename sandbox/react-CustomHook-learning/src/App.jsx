// in react we can make our custom hooks , these are helpful when we have a functionality and then we are using it again and again repeatedly so what we can do is we make the hook of the functionality and then use the hookwherever we need that functionality 

// now to make the custom hook we use put the 'use' before the name of the hook so it would be like useName , after that we create the states and the setState and then define all the functions in it and in it we return whatever is needed to be returned in that functionality , after that we export that function i.e. the custom hook. finaly we import that component (function) and then use it


import { useEffect, useState } from 'react'
import './App.css'
import usetoggle from './component/usetoggle'

function App() {
  const [value, toggleValue] = usetoggle(true)   // using the custom hook we can have any name for the returning values 

  return (
    <div>
      <button onClick={toggleValue}>toggle heading</button>
      <button onClick={() => toggleValue(true)}>show heading</button>
      <button onClick={() => toggleValue(false)}>hide heading</button>

      {value ? (<h1>this is the heading</h1>) : null}
    </div>
  )
}

export default App
