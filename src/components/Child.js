import React from 'react'

export default function Child(props) {
  return (
    <>
    <h4>Child Component</h4>
    <button onClick={props.greetHandler}>Greet Parent</button>
    <p> child nnu parentillekku parametrs pass cheyunnath arrow function syntax use cheyannam</p>
    <button onClick={()=>props.greetHandlerParameter('Child')}> Greet parent with parameter</button>
    </>
    
  )
}
