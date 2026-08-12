// here we need to follow the following steo for the router 
// 1. install the router dependencies
// 2. create a variable for the router and in that we will be storing the array of paths 
// 3. in every route there are two things first is the path and the second is the element , this means the path is given and for that path the following element will be open
// 4. now after creating the routes we need to provide the context to the app for the said routes, meaning we need to tell the app that if this route is selectes do this , to do this we use the context provider
// here in the basic setup (import , create path ,provide context) we need to change the url again and again to go to the new webpage but we want a ui button to navigate to different pages so for that we will use the navbar
// we will also use the useParam hook to pass the parameters in the url , now in this we will pass the '/:id' at the end of the path and that will be considered as a parameter in the path
// we will use useNavigation hook to go from one page to another, we will use the navigate hooks reference and in that we will pass the path of the component we want to navigate to
// we can have nested routing which means we can navigate to an element and then move to the next element from that element. for this we will use the children array in which we provide the path and the element just like the router and in the parent component we will add the </outlet>
// we can create a route such that if no path matches show this page

import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './components/Home'
import About from './components/About'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'
import Courses from './components/Courses'
import Test from './components/Test'
import Reports from './components/Reports'
import NotFound from './components/NotFound'
import './App.css'
import ParamsComp from './components/ParamsComp'


// creating the variable for the router 
const router = createBrowserRouter(
  [
    //storing the array of the routes
    {
      path: '/',    // this is the path
      element:
      <div>
        <Navbar />
        <Home />
      </div>     //this is the element
    },
    {
      path: '/about',
      element: 
      <div>
        <Navbar />
        <About/>
      </div>
    },
    {
      path: '/dashboard',
      element: 
      <div>
        <Navbar />
        <Dashboard/>
      </div>,
      children:[
        {
          path:'courses',
          element:<Courses />
        },
        {
          path:'test-Series',
          element:<Test/>

        },
        {
          path:'reports',
          element:<Reports/>
        }
      ]
    },
    {
      path: '/param/:id',
      element:
      <div>
        <Navbar />
        <ParamsComp />
        </div>
    },
    {
      path:'*',
      element:<NotFound/>
    }
  ]
)

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<RouterProvider router={router}/>

    </>
  )
}

export default App
