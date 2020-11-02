import { useState, useEffect } from "react";
import '../App.css'
import questions from '../json/Apprentice_TandemFor400_Data.json'
import Question from './Question'

function Game() {

    const [tenQuestions, setTenQuestions] = useState(questions.sort(() => 0.5 - Math.random()).slice(0, 10))
    const [currQindex, setCurrQindex] = useState(0)
    const [currQ, setCurrQ] = useState(tenQuestions[currQindex])

    return (
        <div className="Game">
            <h1>Game Started!</h1>
            <Question
                question={currQ.question}
                incorrect={currQ.incorrect}
                correct={currQ.correct}
            />
        </div>
    );
}

export default Game;
