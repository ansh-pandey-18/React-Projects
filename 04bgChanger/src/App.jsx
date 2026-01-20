import { useState } from 'react'
import './App.css'

function App() {
const [color,setColor]=useState("Olive")

// function changeColor(color){
//   setColor(color)
// }

  return (
    <div className="w-full h-screen duration-200 bg-blue-500" style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 bg-white/30 rounded-3xl">
          <button onClick={
            ()=>setColor("red")
            }>RED</button>
          <button onClick={
            ()=>setColor("blue")
          }>BLUE</button>
          <button onClick={
            ()=>setColor("green")
          }>GREEN</button>
        </div>
      </div>
    </div>
  )
}

export default App

/* BG changer Project:
1. Whenever we need to propogate any change in UI, use state variable and state method
2. Change state variable only through state method
3. JSX event handler needs a function. If you want to pass arguments to function, wrap it in an arrow function
Eg: 1. [color, setColor] = useState("Olive")
    2. onClick={()=>setColor("red")}
*/