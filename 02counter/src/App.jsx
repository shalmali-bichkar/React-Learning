import{useState} from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)
  // let counter = 15; this variable will never propogate in UI, u need to use hooks
  const addValue = ()=>{
    if(counter<20){
      counter = counter+1;
      console.log("clicked", counter);
      // setCounter(prevCounter => prevCounter+1); see chai aur react ep 8
      setCounter(counter);
    }
    else{
      console.log("max value reached");
    }
    
  }
  const removeValue = ()=>{
    if(counter>0){
      counter = counter-1;
      console.log("clicked", counter);
      setCounter(counter)
    }
    else{
      console.log("min value reached");
    }
  }
  return (
    <>
      <h1>Counter App</h1>
      <h2>Count is : {counter}</h2>
      <button onClick = {addValue} >Add Value {counter}</button>
      <button onClick = {removeValue}>Remove Value {counter}</button>
    </>
  )
}
export default App
