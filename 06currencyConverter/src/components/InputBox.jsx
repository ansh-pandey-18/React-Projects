import React,{useId} from 'react'

function inputBox({
    label,                              //Value of label: From or To
    amount,                             //Value of amount input field
    onAmountChange,                     //Function responsible for changing the amount value
    onCurrencyChange,                   //Function responsible for changing the currency type
    currencyOptions=[],                 //Array of currency options to be displayed in the select dropdown
    selectedCurrency="USD",
    amountDisabled=false,               //In the To inputBox, the amount input field should be disabled
    currencyDisabled=false,
    className=""
}) {
    const id=useId()                 //Unique id for associating label with input field
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>           {/* Outer div for inputBox component */}
        <div className='w-1/2'>                                                    {/* Inner Div containing leftLabel and amount */}
            <label htmlFor={id} className="text-black/40 mb-2 inline-block">{label}</label>
            <input 
            id={id}
            type="number"
            className='outline-none w-full bg-transparent py-1.5'
            placeholder="Amount"
            disabled={amountDisabled}
            value={amount}
            onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}      
            />                                                                          {/* If onAmountChange exists, call it and pass the amount value */}
        </div>

        <div className='w-1/2 flex flex-wrap justify-end text-right'>               {/* Inner Div containing Currency Type and select dropdown list */}
            <p className="text-black/40 mb-2 w-full">Currency Type</p>
            <select 
            className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
            value={selectedCurrency}
            onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
            disabled={currencyDisabled}
            >
                {currencyOptions.map((currency)=> (             //For each currency in array, return an option element of select dropdown list. Map takes each element of array, does something and returns new element
                    <option key={currency} value={currency}>
                        {currency}</option>
                ))}
            </select>
        </div>
    </div>
  )
}

export default inputBox

/*
1. For designing any component, first figure out what are the props that need to be passed
Here for the inputBox component, we need to pass the following props: label, amount, onAmountChange, onCurrencyChange, currencyOptions, selectedCurrency, amountDisabled, currencyDisabled, className
2. Create the component structures using HTML and Tailwind CSS
Here we have an outer div containing two inner divs
The first inner div contains the left portion of InputBox: label and amount input field
The second inner div contains the right portion of InputBox: Currency Type text and select dropdown list
3. Add the props to the component
4. Export the component
*/
