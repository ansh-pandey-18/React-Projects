import { useState } from 'react'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card username="Ansh Pandey" myArr={[18,17,333]}/>
      <Card username="Virat Kohli" designation="King"/> 
      <Card username="AB De Villiers" designation="360"/> 
      <Card username="Chris Gayle" designation="Boss"/> 
    </>
  )
}

export default App
