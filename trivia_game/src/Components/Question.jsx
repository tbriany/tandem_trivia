import { useState, useEffect } from "react";
import '../App.css'


function Question(props) {

    const { question, correct, incorrect } = props
    const [answers, setAnswers] = useState([])

    useEffect(() => {
        setAnswers([...incorrect, correct].sort(() => 0.5 - Math.random()))
    }, [incorrect, correct])

    const answerArr = answers.map((answer) => {
        return (
            <div key={answer}>
                <label>
                    <input type="radio" name="chosenAnswer" value={answer} />
                    {answer}
                </label>
            </div>
        )
    })

    return (
        <div className="Question">
            <h3>{question}</h3>
            <form >
                {answerArr}
            </form>
        </div>
    );
}

export default Question;
