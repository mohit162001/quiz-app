import React, { useState } from 'react'
import QUESTIONS from '../question.js'
import QuizTimer from './QuizTimer.jsx';
import Summary from './Summary.jsx';
import StartModal from './StartModal.jsx';

function Quiz() {
    const [userAnswer,setUserAnswer] = useState([]);

    const activeQuetion =userAnswer.length 

    const quizOver = activeQuetion === QUESTIONS.length
    
    const [Modal,setModal] = useState(true);

    function handleModal(){
        setModal(false);
    }
    function handleSelectAns(selectedAns){
        setUserAnswer((preAnswer)=>{
            return [...preAnswer,selectedAns];
        })  
    }
    console.log('answer',userAnswer)

    if(quizOver){
        return <Summary userAnswer={userAnswer} setUserAnswer={setUserAnswer} />
    }
    const shuffledAnswer = [...QUESTIONS[activeQuetion].answers]
    shuffledAnswer.sort();
    const correct = userAnswer.filter((answer,index)=>{
        return answer === QUESTIONS[index].answers[0]
    })
    // const wrong = userAnswer.filter((answer,index)=>{
    //     return answer !== QUESTIONS[index].answers[0]
    // })
  return (
    <>
    <div id='modal'>
       {Modal? <StartModal handleModal={handleModal}/>:''}
    </div>
    <div id='quiz'>
        
        {Modal===false?<QuizTimer Modal={Modal} key={activeQuetion} onTimwOut={()=>handleSelectAns(null)}/>:''}
        <p id='score-p'>Score:{correct.length}/{QUESTIONS.length}</p>

    <h2><span>{activeQuetion+1}: </span>{QUESTIONS[activeQuetion].text}</h2>
    <ul id='answers'>
        {shuffledAnswer.map((answer)=>{
            return <li key={answer} className='answer'><button  onClick={()=>handleSelectAns(answer)}>{answer}</button></li>
        })}
    </ul>
   </div>
    </>
  )
}

export default Quiz;