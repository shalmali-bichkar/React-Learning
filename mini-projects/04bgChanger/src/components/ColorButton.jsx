import React from 'react'

function ColorButton({btnColor = "black", onClickBgChanger}){
  return(
    <button 
      onClick={()=>onClickBgChanger(btnColor)} 
      className = 'flex text-white m-4 p-3 rounded-xl ' 
      style={{backgroundColor: btnColor}}  
    > 
      {btnColor}
    </button>
    

  )
}
export default ColorButton