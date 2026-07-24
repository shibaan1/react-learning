// useReducer is the alternative to useState hook for state management, it is useful when the state has more than one values to change or the new state depends on the previous state or there are more than one way to update the state. usereducer has many things in it to do different task/operations in the component . 

// simply put when there are too many things/state changing when the component changes then we use useReducer

// there are three things required for the useReducer 

// 1. state -- this the current data of the component , it is usually an object
// eg)
// const state = {
//   items: [],
//   total: 0,
//   isLoading: false,
//   error: null
// };

// 2. action -- it is an object that describes what happens when something is changed , it always has a type
// eg)
// { type: "ADD_ITEM", payload: { id: 1, name: "Shoes", price: 50 } }
// { type: "REMOVE_ITEM", payload: 1 }
// { type: "CLEAR_CART" }

// 3. reducer -- this is the main function that takes the current state and the action and based on that gives a new state
// eg)
// function reducer(state, action) {
//   switch (action.type) {
//     case "ADD_ITEM":
//       return { ...state, items: [...state.items, action.payload] };
//     case "REMOVE_ITEM":
//       return { ...state, items: state.items.filter(item => item.id !== action.payload) };
//     case "CLEAR_CART":
//       return { ...state, items: [] };
//     default:
//       return state;
//   }
// }

// syntax --> const [state, dispatch] = useReducer(reducer, initialState);
// state --> it is the current state 
// dispatch is the function that sends the action to the reducer , we use it in place of setValue
// reducer --> it is the function that takes the current state and action and gives the new state, it is made outside the component
// initialState -->  it is the starting state

import { useState } from 'react'
import './App.css'
import { useReducer } from 'react'


// this is the state , intilay we made this empty
const emptydata = {
  name: '',
  email: '',
  password: '',
  city: '',
  address: ''
}

// this is the reducer , we pass two things in the reducer first is the data and then second is the action, data is state usualy the initialstate, action is the thing that will happen when the state is changed

const reducer = (data, action) => {

  return { ...data, [action.type]: action.val }

  // here the we take the current data(state) then we pass the action type meaning what is the type of action is being called here as there are may types (eg-- name , email etc) and we set that the new state will be action.val, which means that the value of the name in empty data will be the input given by the use which is its new state
}

function App() {

  // this the initialisation of the usereducer state is the current state emptydata is the initial state , dispatch is the function whenever we we need to call the usereducer with input fields then we use dispatch, reducer is the function we will create for getting the new state
  const [state, dispatch] = useReducer(reducer, emptydata)

  console.log(state)
  return (
    <>
      <input type="text" placeholder='enter name' onChange={(e) => dispatch({ val: e.target.value, type: 'name' })} />
      <br />

      <input type="text" placeholder='enter email' onChange={(e) => dispatch({ val: e.target.value, type: 'email' })} />
      <br />

      <input type="text" placeholder='enter password' onChange={(e) => dispatch({ val: e.target.value, type: 'password' })} />
      <br />

      <input type="text" placeholder='enter city' onChange={(e) => dispatch({ val: e.target.value, type: 'city' })} />
      <br />

      <input type="text" placeholder='enter address' onChange={(e) => dispatch({ val: e.target.value, type: 'address' })} />
      <br />

    </>
  )
}

export default App