import React from 'react'

function InputBox({
    label,
    amount,
    // defaultCurrency,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    
}){
    return(
        <div className ={"flex bg-slate-100 w-fit h-fit rounded-lg p-4"}>
            <div className = {'flex flex-col '}>
                <label className='text-gray-400 pb-3'>
                    {label}
                </label>
                <input 
                    className='flex text-black bg-slate-100 '
                    type = "number"
                    placeholder = "Amount"
                    value = {amount}
                    onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div>
                <p className='text-gray-400 pb-3' > 
                    Currency Type
                </p>
                <select
                    className='rounded-md  bg-slate-400 text-black'
                    value = {selectCurrency}
                    onChange = {(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                >
                    {currencyOptions.map((currency)=>(
                        <option key = {currency} value = {currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;