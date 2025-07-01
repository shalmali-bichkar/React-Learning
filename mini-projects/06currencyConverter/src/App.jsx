import { useState } from 'react'
import {InputBox} from './components'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("inr")
  const [to, setTo] = useState("usd")
  const [convertedAmount, setConvertedAmount] = useState(0)
  

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  const convert = ()=>{
    setConvertedAmount(amount*currencyInfo[to])
  }
  
  return (
    <div className='"w-full h-screen flex flex-wrap justify-center items-center'>
      <div className = "flex w-fit h-fit">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert()
            console.log(currencyInfo[to])
          }}
        >
          <div className = "pb-4">
            <InputBox
              label = "From"
              amount = {amount}
              currencyOptions={options}
             // defaultCurrency = "inr"
              onAmountChange={(amount)=> setAmount(amount)}
              onCurrencyChange={(currency)=>  setFrom(currency)}
              selectCurrency={from}
            ></InputBox>
          </div>
          <div className='relative'>
            <button
              type = "button"
              className = "absolute flex h-fit w-fit p-2 bg-slate-400 text-black rounded-lg  left-1/2 -translate-x-1/2 -translate-y-1/2"
              onClick={swap}
            >
              swap
            </button>
          </div>
          <div className = "pb-2">
            <InputBox
              label = "To"
              // defaultCurrency = "usd"
              amount = {convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency)=> setTo(currency)}
              selectCurrency={to}
            ></InputBox>
          </div>
          <button type="submit" className="w-full  bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>

      </div>
      
    </div>
  )
}

export default App
