import React, { useEffect, useState } from 'react'

function UseEffectTwo() {
  const[show,setShow]=useState(false)
  useEffect(()=>{
    console.log("Mounting details");
    return ()=>{
      console.log("unmounting details");
    }
  })

  return (
    <div>
      <button onClick={()=>setShow(!show)}>show/hide</button>
      UseEffectTwo  -- mounting unmounting
      {
        show ? <h4>Showing details</h4> : null
      }
    </div>
  )
}

export default UseEffectTwo
