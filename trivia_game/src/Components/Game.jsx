import { useState, useEffect } from "react";
import '../App.css'
import questions from '../json/Apprentice_TandemFor400_Data.json'
import Question from './Question'

function Game() {

    const [tenQuestions, setTenQuestions] = useState(questions.sort(() => 0.5 - Math.random()).slice(0, 10))
    const [currQindex, setCurrQindex] = useState(0)
    const [currQ, setCurrQ] = useState(tenQuestions[currQindex])

    const getNextQuestion = () => {
        setCurrQindex(currQindex + 1)
        setCurrQ(tenQuestions[currQindex + 1])
    }

    return (
        <div className="Game">
            <h1>Game Started!</h1>
            <Question
                question={currQ.question}
                incorrect={currQ.incorrect}
                correct={currQ.correct}
            />
            <button onClick={getNextQuestion}>Next Question</button>
        </div>
    );
}

export default Game;
