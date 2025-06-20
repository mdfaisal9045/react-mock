import React from 'react'
import GrandChild from './GrandChild'

const Child = ({info2}) => {
    console.log(info2);
    
  return (
    <>
    <GrandChild info3={info2}/>
    </>
  )
}

export default Child