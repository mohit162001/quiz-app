import React, { useEffect, useState } from 'react'

function QuizTimer({onTimwOut,time}) {
   const [remianTime,setRemainTime]= useState(time);

  useEffect(()=>{
    const timer =setTimeout(onTimwOut,time);
    return ()=>{
      clearTimeout(timer);
    }
  },[onTimwOut,time])

 useEffect(()=>{
    const interval =  setInterval(()=>{
        setRemainTime(prevTime=>prevTime-100)
      },100)
    return ()=>{
      clearInterval(interval)
    }
 },[])

  return (
    <progress id='quetoin-time' value={remianTime} max={time}/>
  )
}

export default QuizTimer