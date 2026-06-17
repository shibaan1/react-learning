// jsx is the react functionality that helps us write the HTML like code in the js. it is different than real HTML. with jsx we can write the code in html formal with js functionalities

// now to make different comnponents what we can do is create that component seprately and then use it anyehere we want. creating components means we create an arrow function for the element and then use that function anywhere by importing it. the whole functionality of the element should be in a single div. also when we give class name in react we use 'classname'

// eg to make the user card we created the component folder and in that we created the file usercard.jsx(to write the functionality of the card) and usercard.css(to style the card) what we will do is we create the whole card here and then export it. now wherever we need this card we will just import it and use it. here we have created the user card and then we will impot it in the app.jsx

// we have to import every file we are making in order to use it 

// now here we have created our own component in usercard.jsx and styled it in usercard.css and we can now use this component anywhere in our code by importing it


import React from 'react'
import randomphoto from '../assets/randomphoto.jfif'
import './usercard.css'

const usercard = () => {
  return (
    <div className='user-container'>

        <p id='user-name'>shibaan askari</p>
        <img id='user-image' src= {randomphoto} alt="hello" />
        <p id='user-desc' >description of the user</p>
      
    </div>
  )
}

export default usercard
