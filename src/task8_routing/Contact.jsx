import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {

  let navigate=useNavigate()
  return (
    <>
      <h1>Contact</h1>
      <div>
        <button onClick={()=>{navigate(-1)}}>🔙GoBack</button>
      </div>
    </>
  )
}

export default Contact


