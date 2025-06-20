import React from 'react'
import Child from './Child'

const Parent = ({info1}) => {
    console.log(info1);
    
  return (
    <>
    <Child info2={info1}/>
    </>
  )
}

export default Parent