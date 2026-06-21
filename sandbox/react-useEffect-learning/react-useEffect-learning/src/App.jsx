// use effecct is a type of hook with which we can generate a side effect. side effect is action that takes place once an event is triggered 

// we write use effect hook as a component in react 

// in  useEffect syntax there are three thing-- first , second, third 

// first is the side effect function that runs when an event is triggered
// second is the cleanup function that runs when the component is removed from the UI 
// third is place where we mention the entites on the basis of which (on their updation )the sideeffects are called, there can be more than one entity in this list  

// there are several variation for use effect hook 

// variation 1 : it runs on every render,  this executes just before every render . this means every time the ui rerenders this varition of the useeffect will run and anything in it will be executed and after the execution the ui will render  . --> in this there is no first(side effect function) , second(cleanup function) and third(dependency list)

// variation 2 : this runs only on the first render. in this the third(dependency list) is just an empty array

// variation 3 : this will run everytime the item in the third(dependency list) renders otherwise it will not run  

// variation 4 : this will run with multiple dependencies, this means that the third(dependency list) will have many items and the useeffect will run everytime if one or two or all of the item rerenders

// variation 5 : this will run as usual but the cleanup function will also run when the component is unmointed form the ui


import { useEffect, useState } from 'react'

import './App.css'

import LoggerComponent from './components/LoggerComponent'
import TimerComponent from './components/TimerComponent'
import DataFetcher from './components/DataFetcher'
import ResizeComponent from './components/ResizeComponent'
import MultiEffectComponent from './components/MultiEffectComponent'

function App() {

  const [count, setcount] = useState(0)
  const [total, settotal] = useState(10)

  const HandleClick = () => {
    setcount(count + 1)

  }

  const Handletotal = () => {
    settotal(total + 5)
  }

  // variation 1 : this runs two times in browser because we are in strict mode and it is just a good practise
  useEffect(() => {
    alert('i will run in every render')
  },)


  // variation 2 :
  useEffect(() => {
    alert('this runs only on the first render')
  }, [])


  // variation3: initially it will run because the count has the inital value as 0 and is considered as the change 
  useEffect(() => {
    alert('this will run only when the count rerenders')
  }, [count])


  // variation 4 :
  useEffect(() => {
    alert('this will run only when the count or total rerenders')

  }, [count, total])


  // variation 5: here we will get this messege again and again because on every rerender the prevu=ious count will be unmounted and the messege will be displayed 
  useEffect(() => {
    alert('this will run when count is updated')

    return () => {
      alert('this is unmount function and it will run when count is unmounted(remove) from the ui')
    }
  }, [count])


  return (
    <div>

      <LoggerComponent />
      <TimerComponent />
      < DataFetcher />
      <ResizeComponent />
      < MultiEffectComponent />

      <button onClick={HandleClick}>click me</button>
      count: {count}
      <br />

      <button onClick={Handletotal}>click me</button>
      total: {total}


    </div>
  )
}

export default App
