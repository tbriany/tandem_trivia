import { useState, useEffect } from "react";
import '../App.css'


function Question(props) {

    const { question, correct, incorrect, score, setScore, questionAnswered, setQuestionAnswered } = props
    const [answers, setAnswers] = useState([])
    const [selectedAnswer, setSelectedAnswer] = useState("")
    const [correctAnswer, setCorrectAnswer] = useState("")


    useEffect(() => {
        setAnswers([...incorrect, correct].sort(() => 0.5 - Math.random()))
        setCorrectAnswer("")
        setQuestionAnswered(false)
    }, [incorrect, correct, setQuestionAnswered])


    const listenToBtn = (event) => {
        setSelectedAnswer(event.target.value)
    }

    const listenToForm = (event) => {
        event.preventDefault()
        if (selectedAnswer === correct) {
            setScore(score + 1)
        } else {
            setCorrectAnswer(`Correct Answer: ${correct}`)
        }
        setQuestionAnswered(true)
    }


    const answerArr = answers.map((answer) => {
        return (
            <div key={answer}>
                <label>
                    <input type="radio" onClick={listenToBtn} name="chosenAnswer" value={answer} />
                    {answer}
                </label>
            </div>
        )
    })

    return (
        <div className="Question">
            <h3>{question}</h3>
            <p>{correctAnswer}</p>
            <form onSubmit={listenToForm} >
                {answerArr}
                {
                    !questionAnswered
                        ? <button>Submit</button>
                        : <></>
                }
            </form>
        </div>
    );
}

export default Question;
