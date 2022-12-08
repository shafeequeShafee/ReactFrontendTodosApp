import React,{useState,useEffect} from 'react'

function CounterUseEffect() {
  // useEffect(()=>{
  //   console.log("Mounting....");

  //   ///// return ntae ulil ittu kodukkumbol aa sathanam unmount aavumbol work cheyyum
  //   return ()=>{
  //       console.log('Unmounting....');
  //   }
  // },[])   ///// [] ittukoduthal mountingillum unmountigillum mathram work cheyyollu

  
  const [count,setCount]=useState(0)
  const [count2,setCount2]=useState(0)
  /// update cheyumbol mathram work cheyyaanu
  useEffect(()=>{
    console.log("Mounting....");
    console.log("Updating "+count);

    return ()=>{
      console.log("clean up "+count)
    }
  },[count]) //// count update cheyumbol mathram call cheyyum

  useEffect(()=>{
    console.log("Mounting....2 :");
    console.log("Updating2 : "+count2);

    return ()=>{
      console.log("clean up2 : "+count2)
    }
  },[count2])
 
  return (
    <div>
        <h3>hi , i am sfq </h3>
        <h2>Updating</h2>
        <button onClick={()=>setCount(count + 1)}>increaseCount1</button>
        <button onClick={()=>setCount2(count2 + 1)}>increaseCount2</button>
        <h3>count:{count} </h3>
        <h3>count2:{count2} </h3>
    </div>
  )
}

export default CounterUseEffect