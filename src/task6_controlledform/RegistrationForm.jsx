//!TASK 6-->on or before sat 

//?I will consider for mock--> react-mock
//!Create a Registration Form Component
// ?Create a controlled form in React that allows users to register by providing their personal details. The form should include various input fields and should apply custom CSS styles using CSS modules.
// * Requirements:Fields to Collect
//? First Name
//? Last Name
//? Email
//? Password
//? Hobby (Coding, Reading, Writing, Dancing, Singing, Listening to Music)
//? Experience (Select one from: Fresher, Experienced)
//? Year of Passing (Select from 2018 to 2025)-->dropdown
//!CSS Styling:
//? Use CSS modules for styling. Create a CSS module file named "registration.module.css" and apply styles to the form and its elements.
//!Submission Format: Provide a PDF document that includes:
// The source code of the component and CSS module.
// Screenshots of the form rendered in the browser.
// The console output after form submission.

//!Task 7 : Fetch the data using axios
//? api--> https://api.github.com/users
//? fetch these data and display it in the "form of table"--> 1)id 2)login 3)avatar_url(img)
//* apply same colors for alternative rows..


import React, { useState } from 'react'
import style from "./form.module.css"

const RegistrationForm = () => {

    let [form,setForm]=useState({
        firstName:"",
        lastName:"",
        emailId:"",
        passWord:"",
        experience:"",
        passingYear:"",
        // hobby:[]
    })
    let {firstName,lastName,emailId,passWord,experience,passingYear}=form


    let [hobby,setHobby]=useState([])
    let handleCheckBox=(e)=>{
        if(e.target.checked===true){
            setHobby([...hobby,e.target.value])
        }else{
            let remainingValue=hobby.filter((value)=>{
                return value!==e.target.value
            })
            setHobby(remainingValue)
        }
    }


    let handleChange=(e)=>{
        console.log(e)
        let {name,value}=e.target
        setForm({...form,[name]:value})
    }

   let handleSubmit=(e)=>{
       e.preventDefault()
       console.log(form);
       
    }
  return (
    <>
    <form className={style.form} onSubmit={handleSubmit}>
        <h1>Registration Form</h1>

        <div>
            <label htmlFor="uname">firstName : </label>
            <input type="text" id='uname' value={firstName} name='firstName' onChange={handleChange}/> <br /> <br />

            <label htmlFor="">lastName : </label>
            <input type="text" value={lastName} name='lastName' onChange={handleChange}/> <br /><br />

            <label htmlFor="">emailId : </label>
            <input type="text" value={emailId} name='emailId' onChange={handleChange}/> <br /><br />

            <label htmlFor="">passWord : </label>
            <input type="text" value={passWord} name='passWord' onChange={handleChange}/> <br /><br />
        </div>

        <div value={hobby} onChange={handleCheckBox}>
            <label htmlFor="">HOBBY: </label>
            <input type="checkbox"value="coding" onChange={handleCheckBox}/>coding
            <input type="checkbox"value="reading"onChange={handleCheckBox}/>reading
            <input type="checkbox"value="writing"onChange={handleCheckBox}/>writing
            <input type="checkbox"value="swimming"onChange={handleCheckBox}/>swimming
        </div> <br />

        <div value={experience}  onChange={handleChange}>
            <label htmlFor="">EXPERIENCE : </label>
            <input type="radio" name='experience' value='experienced'/>Experienced
            <input type="radio" name='experience' value='fresher'/>Fresher
        </div> <br />

        <div >
            <label htmlFor="">Year Of Passing: </label>
            <select name="passingYear" id="" onChange={handleChange}>
                <option value="year">-- year --</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
            </select>
        </div> <br />

        <div>
            <button>SUBMIT</button>
        </div>
    </form>
    </>
  )
}

export default RegistrationForm