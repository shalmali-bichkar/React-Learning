import { useCallback, useState, useEffect,useRef } from 'react'

import './App.css'

function App() {
  const [length,setLength] = useState(5);
  const [allowNumbers, setAllowNumbers] = useState(false);
  const [allowCharacters, setAllowCharacters] = useState(false);
  const [password, setPassword] = useState();

  const passwordRef = useRef(null)

  const passwordGenerator= useCallback(()=>{
    let pass = "";
    let str = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz"
    if(allowNumbers){
      str += "0123456789"
    }
    if(allowCharacters){
      str += "./<>@#$%^&*()"
    }
    for(let i = 0;i<length;i++){
      let char = Math.floor(Math.random()*str.length+1);
      pass += str.charAt(char);
    }
    setPassword(pass);

  },[length,allowNumbers,allowCharacters])

  useEffect(()=>{
    passwordGenerator()
  }, [length,allowNumbers,allowCharacters, passwordGenerator])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current.select();
    window.navigator.clipboard.writeText(password)
  },[password])

  return (
    <div className='flex  w-full max-w-lg text-orange-500 justify-center  bg-gray-800 p-4 my-8 justify-self-center flex-col'>
      <div className='flex text-white text-2xl justify-center mb-4' >Password Generator</div>
      <div className='flex justify-center overflow-hidden w-900 rounded-xl bg-white'>
        <input
          type = "text"
          value={password}
          placeholder='password'
          className='px-2 w-full'
          readOnly
          ref={passwordRef}
        />
        
        <button 
          className='flex justify-center align-middle  bg-blue-600 text-white px-2 py-1 '
          onClick= {copyPasswordToClipboard}
        >
          Copy
        </button>
      </div>
      <div className='flex my-4 '>
        <div className='flex '>
          <input
            type = "range"
            min = {5}
            max = {100}
            value = {length}
            className = 'cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}
          /> 
          <label className='mx-2'>Length : {length}</label>
        </div>
        <div className='flex mx-2'>
          <input
            type = "checkbox"
            defaultChecked = {allowNumbers}
            className = ''
            id = "numberInput"
            onChange={()=>setAllowNumbers((prev)=> !prev)}

          /> 
          <label htmlFor='numberInput' className='mx-2'> Numbers </label>
          
        </div>
        <div className='flex mx-2'>
          <input
            type = "checkbox"
            defaultChecked = {allowCharacters}
            className = ''
            id = "numberInput"
            onChange={()=>setAllowCharacters((prev)=> !prev)}

          /> 
          <label htmlFor='characterInput' className='mx-2'> Characters </label>
          
        </div>
      </div>
    </div>
  )
}

export default App
