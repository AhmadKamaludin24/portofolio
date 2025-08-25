import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Button from './components/Button'
import ButtonGradient from '../src/assets/svg/ButtonGradient'
import Header from './components/Header'
import Hero from './components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
     <div className='overflow-hidden pt-[4.7rem]'>
      <Header/>
      <Hero/>
     </div>
     <ButtonGradient/>
    </>
  )
}

export default App
