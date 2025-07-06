import React from 'react'
import { useNavigate } from 'react-router-dom'

const Events = () => {

  let navigate = useNavigate()
  return (
    <>
      <h1>Events</h1>
      <div><button onClick={()=>{navigate("/contact")}}>Go to contact</button></div>
      <div><button onClick={()=>{navigate("/courses")}}>Go to courses</button></div>
    </>
  )
}

export default Events

