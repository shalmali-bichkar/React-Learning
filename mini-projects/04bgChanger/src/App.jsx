import { useState } from 'react'

import './App.css'
import ColorButton from "./components/ColorButton"

function App() {
  let [color,setColor] = useState("black")
  function changeColor(bgColor){
    setColor(bgColor)
    console.log("ello")
  }
  return (
 
    <div className='w-full h-screen duration-100 relativr' style={{backgroundColor: color}}>
       <div className='flex justify-center pt-10 text-4xl font-bold text-white'>Background Changer</div>
       <div className='flex justify-center p-8 text-l f text-white'>Click on any of the buttons below to change the backgrond color</div>
       <div className = 'flex fixed w-full bottom-12 p-0 justify-center' > 
        <div className = 'flex w-fit  bg-white text-black p-0 rounded-2xl' >
          <ColorButton btnColor = "Brown" onClickBgChanger = {changeColor} />
          <ColorButton btnColor = "Red" onClickBgChanger = {changeColor} />
          <ColorButton btnColor = "Orange" onClickBgChanger = {changeColor} />
          <ColorButton btnColor = "Yellow" onClickBgChanger = {changeColor} />
          <ColorButton btnColor = "Green" onClickBgChanger = {changeColor} /> 
          <ColorButton btnColor = "DarkGreen" onClickBgChanger = {changeColor} />
          <ColorButton btnColor = "Blue" onClickBgChanger = {changeColor} />
          <ColorButton btnColor = "DarkBlue" onClickBgChanger = {changeColor} />
          <ColorButton btnColor = "Violet" onClickBgChanger = {changeColor} />
          <ColorButton btnColor = "Purple" onClickBgChanger = {changeColor} />
          <ColorButton btnColor = "Black" onClickBgChanger = {changeColor} />
          <ColorButton btnColor = "Gray" onClickBgChanger = {changeColor} />

        </div>
          
      </div> 
    </div>
      

  )
}

export default App
