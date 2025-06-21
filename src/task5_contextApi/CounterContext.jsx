// /!TASK 5:Implement the SimpleCounter task using Context api-> Submission on or before wednesday
//?* I will consider this task for your mock

//? 1) Create one component as "CounterContext.jsx" under 'context' folder
//? 2) Create "SimpleCounter.jsx" under task folder [If u have already created no need to create again]
//? 3) In "CounterContext.jsx" create a state variable as "counter" store initial value as 0. Take updater function as "setCounter".
//? 4) In "CounterContext.jsx" declare 3 function as "increment", "decrement", "reset".In "increment" function write logic to increase state value by 1. In "decrement" function write logic to decrease state value by 1.In "reset" function write logic to set back the state value to initialvalue.
//! Send the all datas["counter","increment", "decrement", "reset"] from "CounterContext.jsx(sender)" to "SimpleCounter.jsx(Consumer)"  with the help of "context api"
//*  In "CounterContext.jsx" create a context api give name as "CounterApi".Then Follow steps OF context api TO SEND DATA from "CounterContext.jsx" to "SimpleCounter.jsx" through create context api.
//*  In consumer component->"SimpleCounter.jsx" consume the data through "useContext()". Then take h1 take to display "counter" state value in "SimpleCounter.jsx" and take 3 buttons as <button>INCREMENT</button>,<button>DECREMENT</button>,<button>RESET</button> in "SimpleCounter.jsx" , onClicking on <button>INCREMENT</button> execute "increment" function, onClicking on <button>DECREMENT</button> execute "decrement" function, onClicking on <button>RESET</button> execute "reset" function.
//!send the photo of code aswell as output by making it as a pdf..Save pdf with urname_taskname.pdf (ram_myprofile.pdf) format


import React, { createContext, useState } from 'react'
import SimpleCounter from './SimpleCounter'

export let ContextApi=createContext()

const CounterContext = () => {

    let [counter,setCounter]=useState(0)

    let increment=()=>setCounter(counter+1)
    let decrement=()=> {if(counter>0){setCounter(counter-1)}}
    let reset=()=>setCounter(0)

    let info={counter,increment,decrement,reset}

  return (
    <ContextApi.Provider value={info}>
        <SimpleCounter/>
    </ContextApi.Provider>
  )
}

export default CounterContext