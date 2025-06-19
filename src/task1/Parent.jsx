
//!TASK 1: PROPS -->EXECUTE IT IN "react-mock"...Date of Submission on or before saturday
//?I will consider this task for your mock
//* SEND THE DATA FROM Parent.jsx to MyProfile.jsx
//?1) Create the "profile of qspiders" institute. In "Parent.jsx" take one  variable as "institute" Assign initial value with data datatype as "object" with following key-value pairs
//  a) iname-->"Qspiders" (datatype->string)
//  b) mode-->"Online" (datatype->string)
//  c) fees-->5000 (datatype->number)
//  d) course-->"FULL STACK" (datatype->string)
//  e) photo-->use any image of qspiders. Go with relative path. (datatype->string)
//   f)rating--> 4.3 (datatype->number)
//?2)In "Parent.jsx" take one "h4" tag write content as "OUR MANTRA IS QUALITY". Take "p" tag write content as "Training to all those Aspiring for successful IT carrer".Send these two elements to "MyProfile.jsx"
//? 3) Set default value of "rating as 0" and "duration as "4months" " in MyProfile.jsx
//? 4)Finally print the content on the UI
//  a) h1 tag iname
//  b) take img tag for image
//  c) h3 tag for all remaing content including "duration"
//?  5) Render the components through App.jsx
//* Apply module css
//!NOTE : SUBMIT THE TASK IN PDF FORMaT. 
// !INCLUDE CODE SNIPPTS AND  OUTPUT ON UI AS WELL AS IN THE CONSOLE. 


import React from 'react'
import image1 from './qspiders_logo.jpg'
import image2 from '../assets/Qspiders.jpg'
import MyProfile from './MyProfile'

const Parent = () => {

    let institute ={
        iname: "Qspiders",
        mode: "online",
        fees: 5000,
        course: "FULLSTACK",
        photo1: image1,
        photo2: image2,
        // rating: 4.3
    }
  return (
    <>
       <MyProfile inst={institute}>
          <h4>"OUR MANTRA IS QUALITY".</h4>
          <p>"Training to all those Aspiring for successful IT carrer"</p>
       </MyProfile>
    </>
  )
}

export default Parent