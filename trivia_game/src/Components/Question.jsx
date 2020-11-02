import { useState, useEffect } from "react";
import '../App.css'


function Question(props) {

    const { question, correct, incorrect, score, setScore} = props
    const [answers, setAnswers] = useState([])
    const [selectedAnswer, setSelectedAnswer] = useState("")


    useEffect(() => {
        setAnswers([...incorrect, correct].sort(() => 0.5 - Math.random()))
    }, [incorrect, correct])

    
    const listenToBtn = (event) => {
        setSelectedAnswer(event.target.value)
    }

    const listenToForm = (event) => {
        event.preventDefault()
        if (selectedAnswer === correct) {
            setScore(score + 1)
        }
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
            <form onSubmit={listenToForm} >
                {answerArr}
                <button>Submit</button>
            </form>
        </div>
    );
}

export default Question;
