import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: 'Shivani',
    city: 'Indore'
  }

  let newArr = [10, 20, 30, 40]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwiind test</h1>
      <Card day='Monday' btnText='click me'/>
      <Card day='Tuesday' />
    </>
  )
}

export default App
