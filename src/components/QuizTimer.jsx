import React, { useEffect, useState } from 'react'
let time =10000;
function QuizTimer({onTimwOut}) {
   const [remianTime,setRemainTime]= useState(time);

//   useEffect(()=>{
//     const timer =setTimeout(onTimwOut,time);
//     return ()=>{
//       clearTimeout(timer);
//     }
//   },[])

//  useEffect(()=>{
//     const interval =  setInterval(()=>{
//         setRemainTime(prevTime=>prevTime-100)
//       },100)
//     return ()=>{
//       clearInterval(interval)
//     }
//  },[])

useEffect(()=>{
  const timer = setTimeout(onTimwOut,time)
  const interval = setInterval(()=>{
    setRemainTime(preTime=>preTime-100)
  },100)

  return ()=>{
    clearTimeout(timer);
    clearInterval(interval);
  }
},[])

  return (
    <progress value={remianTime} max={time}/>
  )
}

export default QuizTimer