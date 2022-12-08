import React from 'react'
import { useState } from 'react'
import CounterUseEffect from './CounterUseEffect'
function UseEffectComp() {
  const [state , setState]=useState(false)
  return (
    <div>
        <h1>useEffect- life cycle hooks</h1>
        <h4>mounting</h4>
        <h4>updating</h4>
        <h4>unmounting</h4>
        <h2>mounting &  unmounting</h2>
        <h5 onClick={()=>setState(!state)}>Sow/Hide</h5>
       { 
        //  state ? <CounterUseEffect />: null
        state && <CounterUseEffect/>
       } 

       
       


    </div>

  )
}

export default UseEffectComp