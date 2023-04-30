import { useState } from "react"
import {AiOutlineMinus} from 'react-icons/ai'
const Question=(question)=>{
const [showInfo,setShowInfo]=useState(false)
  return (
    <article className="question">
      <header>
        <h5>{question.title}</h5>
        <button className="question-btn" onClick={()=>{setShowInfo(!showInfo)}}>click</button>
      </header>
      {showInfo && <p>{question.info}</p>}
     
    </article>
  )
}


export default Question
