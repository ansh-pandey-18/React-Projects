import { useState } from 'react'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import { InputBox } from './components/index.js'


function App() {
  //4 state variables on change of which we need to re-render UI
  const [inputAmount,setInputAmount] = useState(0)
  const [fromCurrency,setFromCurrency] = useState("INR")
  const [toCurrency,setToCurrency] = useState("USD")
  const [convertedAmount,setConvertedAmount] = useState(0)

  
  const currencyInfo = useCurrencyInfo(fromCurrency)            //Custom hook to fetch currency info from API based on fromCurrency
  const options=Object.keys(currencyInfo)                       //Array of currency options for select dropdown

  const convert=()=>{                                           //Function to convert fromCurrency to toCurrency
    setConvertedAmount(inputAmount*currencyInfo[toCurrency])    //When key is constant use dot, when key is variable use bracket notation
  }

  const swapCurrencies=()=>{                                    //Function to swap to and from currencies
    const tempCurrency=fromCurrency
    setFromCurrency(toCurrency)
    setToCurrency(tempCurrency)

    const tempAmount=convertedAmount
    setConvertedAmount(inputAmount)
    setInputAmount(tempAmount)
  }

  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        }}>
          <div className='w-full'>
              <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                  <form onSubmit={(e)=>{      //Wrap the InputBoxes inside form to handle submit event
                    e.preventDefault()
                    convert()
                  }}>
                    {/* Div containing from InputBox */}
                      <div className='w-full mb-1'>                
                          <InputBox
                              label="From"
                              amount={inputAmount}
                              currencyOptions={options}
                              onCurrencyChange={(currency)=>{
                                setFromCurrency(currency.toUpperCase())
                              }}
                              onAmountChange={(amount)=>{
                                setInputAmount(amount)
                              }}
                              selectedCurrency={fromCurrency}
                          />
                      </div>

                      {/* //Div containing swap button */}
                      <div className='relative w-full h-0.5'>          
                              <button
                              type="button"
                              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                              onClick={swapCurrencies}
                              >
                                Swap
                              </button>
                      </div>

                      {/* Div containing TO InputBox */}
                      <div className='w-full mb-1'>                
                          <InputBox
                              label="To"
                              amount={convertedAmount}
                              currencyOptions={options}
                              onCurrencyChange={(currency)=>{
                                setToCurrency(currency.toUpperCase())
                              }}
                              selectedCurrency={toCurrency}
                              amountDisabled={true}
                          />
                      </div>
                      <button
                      type="submit"
                      className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
                      >
                        Convert {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}
                      </button>
                  </form>
              </div>
          </div>
    </div>
  )
}

export default App

/*CURRENCY CONVERTER PROJECT:
1. Create Reusable components of Project: InputBox
2. Create Custom Hook to fetch currency info from API: useCurrencyInfo
3. Use the components and custom hook in App.jsx to create Currency Converter App
*/