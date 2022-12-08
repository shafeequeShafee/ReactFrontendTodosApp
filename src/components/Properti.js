import React, { useState } from 'react'
import Counter from './Counter';
import Employee from './Employee';

export default function Properties(props) {
  let [count, setCount]=useState(0);
  // let count =0;
  ///// array destructuring
  // const arr=[0,1,2,3]
  // const[j,k,l,m]=arr
  // console.log(`j:${j},k:${k}`)
  function clickHandler1() {
    alert('click event')
  }

  function clickHandler2() {
    alert('click event')
  }
  function increase(){
    setCount(count+1)
   
  }

  let obj={
    title:'3rd counter',
    count:count,
    place:"chungathara"
  }

  let employ=[
    {
      name:"sfq",
      age:25
    },
    {
      name:"ellon musk",
      age:35
    },
    {
      name:"steve jobs",
      age:65
    },
    {
      name:"sunderberg",
      age:32
    }
  ]
  return (
    <>
      <h3>Props Name : {props.name}</h3>
      <h3>Event handling : 
        <button onClick={clickHandler1}>Click1</button>,
        <button onClick={() => clickHandler2()}>Click2</button>
        <button onClick={increase}>Add</button> 
        
        
        
        
      </h3>
      <h4>spread operator</h4>
      <Counter title="1st" count={count} />
        <Counter title="2nd" count={count} />
      <Counter {...obj}/>

      {
        employ.map((emp,index)=>{
          return(
            <Employee key={index} {...emp}/>
          )
        })
      }

    </>

  )
}
