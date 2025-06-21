//!TASK 3: JSX+STATE+MODULE CSS-->submit it before 29th june
//?I will consider this task for your mock

//Create one component "MyProfile.jsx"
//inside this component take a normal variable "username" and store your name.
//  Then display this name on UI inside "h3"
//inside this component take a state variable "course" withupdator function "setCourse" .
//  In state variable store initial value as "webtech".
// By taking the taking the "button" update initial value of state variable to "Reactjs" using "setCourse" updator function.
// Display course inside h3 tag
//In h1 tag give heading "My Id Card"
//take 2 paragraph tag , mention your degree and in second p tag year of passing
//between these 2 ptag i need one line gap (break tag)
//call MyProfile.jsx inside App.jsx
//?apply module css-->display it in the form of card
//!send the photo of code aswell as output by making it as a pdf.Save pdf with urname_taskname.pdf (ram_myprofile.pdf) format


import React, { useState } from 'react'
import style from "./card.module.css"

const MyProfile = () => {

    let username="Faisal"
    let [course,setCourse]=useState("webtech")
    let changedCourse=()=>setCourse("Reactjs")
  return (
    <>
    <div id={style.card}>
    <h1>My Id Card</h1>
    <p>
        Degree : B.A. in Economics <br />
        Year of passing : 2018
    </p>
    <h3>{course}</h3>
    <button onClick={changedCourse}>change course</button>
    </div>
    </>
  )
}

export default MyProfile