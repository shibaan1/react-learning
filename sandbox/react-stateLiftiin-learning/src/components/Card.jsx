// now here we have the child and that child is having the input now the state is defined in the app.jsx and then app.jsx is also controling the state . here what we are doing is we are changing the value of name using setname and that value is changed in the app.jsx state name and then it is reflected here in the para tag 

// so what is happening here is we have created the state in the App.jsx (parent) and then we have passed it to the Card.jsx(child) . in child we are just changing the value of the state and this value is updated in the parent and that updated value is then accessed again in child . so we are changing data in child and the data changed in parent from there it can be accessed by all the childs .
// only data value is set in child and the actual change is in the parent  


import React from 'react'

const Card = (props) => {
    return (
        <div>
            <input type="text" onChange={(e) => props.setName(e.target.value)} />
            <p>name of state varaible is : {props.name} and title is : {props.title}</p>

        </div>
    )
}

export default Card
