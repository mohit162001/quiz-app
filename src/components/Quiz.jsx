import React, { useCallback, useState } from 'react'
import QUESTIONS from '../question.js'

import QuizTimer from './QuizTimer.jsx';
import Summary from './Summary.jsx';
function Quiz() {
    const [userAnswer,setUserAnswer] = useState([]);

    const [answerState,setAnswerState] = useState('');

    const activeQuetion = answerState===''?userAnswer.length : userAnswer.length-1;
   
    const quizOver = activeQuetion === QUESTIONS.length

    const handleSelectAns = useCallback(function handleSelectAns(selectedAns){
        setAnswerState('answered')    
        setUserAnswer((preAnswer)=>{
            return [...preAnswer,selectedAns];
        })
        setTimeout(()=>{
            if(selectedAns === QUESTIONS[activeQuetion].answers[0]){
                setAnswerState('correct')
            }else{
                setAnswerState('wrong')
            }
            setTimeout(()=>{
                setAnswerState('')
            },2000)
        },1000)
    },[activeQuetion])
   
    const handleSkipAns = useCallback(()=>handleSelectAns(null),[handleSelectAns])
    console.log('answer',userAnswer)

    if(quizOver){
        return <Summary userAnswer={userAnswer}/>
    }

    const shuffledAnswer = [...QUESTIONS[activeQuetion].answers]
    shuffledAnswer.sort();


  return (
    <div id='quiz'>
        <QuizTimer key={activeQuetion} time={10000} onTimwOut={handleSkipAns}/>
    <h2><span>{activeQuetion+1}: </span>{QUESTIONS[activeQuetion].text}</h2>
    <ul id='answers'>
        {shuffledAnswer.map((answer)=>{
            // const isSelected = userAnswer[userAnswer.length-1] ===answer;
            // let cssClass = ''
            // if(answerState ==='answered' && isSelected){
            //     cssClass = 'selected'
            // }
            // if((answerState==='correct' || answerState ==='wrong') && isSelected){
            //     cssClass=answerState;
            // }
          
            return <li key={answer} className='answer'><button  onClick={()=>handleSelectAns(answer)}>{answer}</button></li>
        })}
    </ul>
</div>

  )
}

export default Quiz;