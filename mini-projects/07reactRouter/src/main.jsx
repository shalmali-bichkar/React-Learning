import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import {Layout} from './Layout.jsx'
import Home from './components/Home'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import User from './components/User.jsx'
import Github,{githubInfoLoader} from './components/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home/>
//       },
//       {
//         path: "about",
//         element: <About/>
//       },
//       {
//         path: "contact",
//         element: <Contact/>
//       },

    
//     ]
//   }
// ])
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = "/" element = {<Layout/>}>
      <Route path ='' element ={<Home/>}/>
      <Route path ='about' element ={<About/>}/>
      <Route path ='contact' element ={<Contact/>}/>
      <Route path ='user/:userid' element ={<User/>}/>
      <Route loader = {githubInfoLoader} path ='github' element ={<Github/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/> 
  </StrictMode>,
)
