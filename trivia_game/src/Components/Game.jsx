import { useState, useEffect } from "react";
import '../App.css'
import questions from '../json/Apprentice_TandemFor400_Data.json'


function Game() {

    const [tenQuestions, setTenQuestions] = useState(questions.sort(() => 0.5 - Math.random()).slice(0, 10))

    return (
        <div className="Game">
            <h1>Game Started!</h1>
        </div>
    );
}

export default Game;
