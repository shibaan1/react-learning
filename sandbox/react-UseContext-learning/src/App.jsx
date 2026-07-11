// in react there are many components and we may want to send some data to the child which is inside a parent which can be inside a parent so now in order to send the data to the final child we have to send it to the heirarchy of the parent and in this we will be sending dats to the components which donot need them . so to handle this we use UseContext hook 

// in this we make the parent component the provider and children the reciver and now the any child can directly access the data from the parent without any intermediate

// step1: we create the context 
// step2: wrap all the children inside the provider (if we place parent in provider then all its children will be in reciver)
// step3: pass the Value
// step4: recieve the value at the child

// in this example we have state theme which is equal to light in the start . now there is a parent (app) and it has a shild named childA and that has another child ChildB and that has a child ChildC now parent has the theme and childC will be accessing it. so we  defined the usestate theme here and then created the useContext named themecontext and then we passed the theme and settheme as the value to the child and then we styled the contianer the condition will check if the bgcolor is equal to light then the colour will be beige otherwise it will be black . in child we created a button and that button on click will change the theme from light to dark if it was light and to light if it was any other . now in child we have taken the theme and settheme from useContext 


import { useState } from 'react'
import './App.css'
import { createContext } from 'react'
import ChildA from './components/ChildA'


// step1:
const UserContext = createContext()
const ThemeContext = createContext()



function App() {
  const [user, setUser] = useState({ name: 'shibaan' })
  const [theme, setTheme] = useState('light')

  return (
    <div>

      {/* step2: */}

      <UserContext.Provider value={user}> {/*step3:*/}
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <div className="container" style={{ backgroundColor: theme === 'light' ? 'beige' : 'black' }}>
            <ChildA />
          </div>
        </ThemeContext.Provider>
      </UserContext.Provider>

    </div>
  )
}

export default App
export { UserContext }
export { ThemeContext }
