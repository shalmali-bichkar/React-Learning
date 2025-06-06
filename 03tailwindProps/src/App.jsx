import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./components/Card"
import Card2 from "./components/Card2"

function App() {
  const [count, setCount] = useState(0)
  // let myObj = {
  //   username: "shalmali",
  //   age:18
  // }
  // let newArr =[1,2,3]
  return (
    <>
      <h1 className = 'bg-yellow-400 text-black p-4 m-4'>Tailwind Test</h1>
      {/* <Card name = "Shalmali" someObj = {myObj} someArr={newArr}/> */}
      <Card name = "Shalmali" para = "My name is Shalmali"/>
      <Card2 name = "Shalmali Card 2" para = "My name is Shalmali"/>
      <Card />
    </>
  )
}

export default App
