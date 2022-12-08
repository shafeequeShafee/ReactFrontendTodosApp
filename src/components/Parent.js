import React from 'react'
import Child from './Child'

export default function Parent() {
    const greetParent=()=>{
        alert(`hello Parent`)
    }

    const greetwithParameter=(childName)=>{
        alert(`hello Parent from ${childName}`)
    }
  return (
    <>
    <h3>Child to Parent Communication : Parent Component</h3> 
    <Child greetHandler={greetParent}  greetHandlerParameter={greetwithParameter}/> 
    
    </>
    
  )
}
