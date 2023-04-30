import Question from "./question"
const Questions=({questions})=>{

  return (
    <section className="container">
      <h1>QUESTIONS</h1>
      {questions.map((question)=>{
        return (
          <Question key={question.id} {...question}></Question>
        )
      })}
    </section>
  )
}


export default Questions
