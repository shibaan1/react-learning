// here in the navbar we have made the li in which there is the path for the element so when the element is clicked the path will be selected and the due to router the path will show the Component
// here we are not using the a tag because it will load the whole page and trigger the rerender, instead we will use link or Navlink to do make the link and then the benifit with Navlink is that it comes with an active class, so it is easier to style the element which is active

import React, { Component } from 'react'
import { Link, NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div>
        <ul>
            <li>
                <NavLink to='/'>Home</NavLink>
            </li>

            <li>
                <NavLink to="/about">About</NavLink>
            </li>

            <li>
                <NavLink to="/dashboard">dashboard</NavLink>
            </li>
        </ul>
      
    </div>
  )
}

export default Navbar
