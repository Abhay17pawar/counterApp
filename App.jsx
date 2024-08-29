import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count,setCount] = useState(0);

  function Increment (){
    setCount(count + 1);
  }

  function Decrement (){
    setCount(count - 1);
  }
   
  function setzero (){
    setCount(0);
  }
  return (
    <>
    <div className='parent'>
     <div className='child'>
     <h1 className='heading'>Counter : {count}</h1>
     <button className='button1' onClick={Increment}>Increment</button>
     <button className='button2'onClick={Decrement}>Decrement</button>
     <button className='button3'onClick={setzero}>Reset to Zero</button>
     </div>
     </div>
    </>
  )
}

export default App
