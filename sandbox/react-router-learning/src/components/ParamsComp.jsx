// here we use the id in the useParams hook , this means all the data defined in place of the id will become the id , this id is called the route paramenter 

import React from 'react'
import { useParams } from 'react-router'

const ParamsComp = () => {
    const {id} = useParams()
  return (
    <div>
      Params : {id}
    </div>
  )
}

export default ParamsComp
