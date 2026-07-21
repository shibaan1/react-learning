import React, { useState } from 'react'

// creating the custom hook
const usetoggle = (initialVal) => {

    // using the usestate hook in the custom hook
    const [value , setValue] = useState(initialVal)

    function toggleValue(val){
        if(typeof(val)!== 'boolean'){
            setValue(!value)
        }

        else{
            setValue(val)
        }

    }

    // returning whatever is needed to be returned

  return [value , toggleValue]
}

export default usetoggle
