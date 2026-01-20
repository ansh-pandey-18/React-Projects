import { useState } from 'react'
import './App.css'

function App() {
  // let counter=18
  const [counter, setCounter]=useState(18)    //1. Create state variable and method by useState() hook


  const addValue=()=>{
    // counter+=1
    setCounter((prevCounter)=> prevCounter+1)   //2. Whenever u need to update state variable, update only via state method
    setCounter((prevCounter)=> prevCounter+1)   //To avoid batching in React, use function callback inside state method
    setCounter((prevCounter)=> prevCounter+1)
    setCounter((prevCounter)=> prevCounter+1)   

    console.log(counter)    //How this change will be propagated in entire UI=> Using State of React
  }

  const removeValue=()=>{
    // counter-=1
    setCounter((prevCounter)=> prevCounter-1)   
    setCounter((prevCounter)=> prevCounter-1)   
    setCounter((prevCounter)=> prevCounter-1)   
    setCounter((prevCounter)=> prevCounter-1)   

    console.log(counter)
  }

  return (
    <>
      <h1>React course with Hitesh {counter}</h1>
      <h2>Counter Value {counter}</h2>
      <button onClick={addValue}> Add value By 4</button>{" "}
      <button onClick={removeValue}>Remove value By 4</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App