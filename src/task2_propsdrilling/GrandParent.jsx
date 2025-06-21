//! Task 3: props-drilling on -before sunday
//!EXECUTE IT IN "react-mock"
//* I will consider this task for mock

//? Send the data GrandParent.jsx --> Parent.jsx --> Child.jsx --->GrandChild.jsx
//In GrandParent.jsx declare following variable with data
// institute---> "Qspiders"  , course --> {frontend:"Reactjs", backend:"Nodejs"} , trainers = ["xyz","abc"]
//? Send all these data under same propname as "info" from GrandParent.jsx
//! Out put --> in h1 --> print institute name
//!  h2 --> Courses available and trainers handling
//! h3 --> Reactjs is handled by abc
//! h3 --> Nodejs is handled by xyz
//!*NOTE : SUBMIT THE TASK IN PDF FORMAT.


import React from 'react'
import Parent from './Parent'

const GrandParent = () => {

    let institute = "Qspiders"
    let course  = {frontend:"Reactjs", backend:"Nodejs"}
    let trainers = ["Chandana","Trainer1"]

    let info = {institute,course,trainers}

  return (
    
    <>
    <Parent info1={info}/> 
    </>
  )
}

export default GrandParent