import React, { useContext } from 'react'
import { ContextApi } from './CounterContext'

const SimpleCounter = () => {

    let data=useContext(ContextApi)
    console.log(data);

    let {counter,increment,decrement,reset}=data
    
  return (
    <>
    <h1>{counter}</h1>
     <button onClick={increment}>INCREMENT</button>
    <button onClick={decrement}>DECREMENT</button>
    <button onClick={reset}>RESET</button>
    </>
  )
}

export default SimpleCounter