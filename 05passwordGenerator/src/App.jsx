import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength]= useState(8)
  const [numbersAllowed, setNumbersAllowed]=useState(false)
  const [charactersAllowed, setCharactersAllowed]=useState(false)
  const [password,setPassword]=useState("")

    const passRef=useRef(null)  //To store reference to password input field

    const generatePassword=useCallback(()=>{
    let pass=""
    //Construct universal string from which u will generate password.
    //By default use only alphabets
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    //Include numbers and characters in string only if allowed
    if(numbersAllowed) str+="0123456789"
    if(charactersAllowed) str+="!@#$%^&*()_+~`|}{[]:;?><,./-="
    
    for(let i=0;i<length;i++){
        const randomIndex=Math.floor(Math.random()*str.length)
        pass+=str[randomIndex]
    }

    //Set password by state method
    setPassword(pass)
    
  },[length,numbersAllowed,charactersAllowed])      //Function should be recreated only when these 3 dependencies change


  //Function for copying password to clipboard
  const copyPasswordToClipboard=()=>{
    passRef.current?.select()            //Select the text inside password input field
    window.navigator.clipboard.writeText(password)
  }

  //Whenever these dependencies change, code inside useEffect will run
  useEffect(()=>{
    generatePassword()
  },[length,numbersAllowed,charactersAllowed])

  return (
    
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none bg-white w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passRef}
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numbersAllowed}
          id="numberInput"
          onChange={() => {
              setNumbersAllowed((prev) => !prev);   //Use callback to ensure that we get opposite of previous state
          }}                                        // We could have directly used onChange={(e)=> setNumbersAllowed(e.target.checked) }
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charactersAllowed}
              id="characterInput"
              onChange={() => {
                  setCharactersAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
)
}

export default App

/* PASSWORD GENERATOR PROJECT:
1. There are 4 state variables in project, on change of which entire UI should be updated:
length, includeNumbers, includeCharacters, overall Password
2. We need to take input of range for length, checkbox for includeNumbers and includeCharacters
and text input for Password
3. Take 4 of these inputs, add classes, and add event listeners to 
change value of each state variable through state methods
4. Create function to generate password on click of button and set password state variable
5. Use useCallback hook to memoize the function so that it is not recreated on every render.
We want to re-render the function only when length, numbersAllowed, or charactersAllowed change.
So dependencies=[length, numbersAllowed, charactersAllowed]
6. Use useEffect hook to run the generatePassword function whenever any of the dependencies change.
7. Create function to copy password to clipboard whenever and call it whenever copy button gets clicked
8. To give feedback, use useRef hook to get reference of password input field and select the text it before copying to clipboard.
*/