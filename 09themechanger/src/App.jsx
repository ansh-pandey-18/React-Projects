import { useState } from 'react'
import './App.css'
import ThemeContextProvider from './contexts/ThemeContextProvider'
import ThemeButton from './components/ThemeButton'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ThemeContextProvider>
          <ThemeButton />
          <Card />
      </ThemeContextProvider>
    </>
  )
}

export default App
