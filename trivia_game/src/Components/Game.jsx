import { useState} from "react";
import '../App.css'
import questions from '../json/Apprentice_TandemFor400_Data.json'
import Question from './Question'

function Game() {

    const [tenQuestions, setTenQuestions] = useState(questions.sort(() => 0.5 - Math.random()).slice(0, 10))
    const [currQindex, setCurrQindex] = useState(0)
    const [currQ, setCurrQ] = useState(tenQuestions[currQindex])
    const [score, setScore] = useState(0)
    const [questionAnswered, setQuestionAnswered] = useState(false)
    const [gameOver, setGameOver] = useState(false)


    const getNextQuestion = () => {
        if (currQindex >= 9) {
            setGameOver(true)
        } else {
            setCurrQindex(currQindex + 1)
            setCurrQ(tenQuestions[currQindex + 1])
        }
    }

    const startOver = () => {
        setTenQuestions(questions.sort(() => 0.5 - Math.random()).slice(0, 10))
        setCurrQindex(0)
        setGameOver(false)
        setScore(0)
    }


    return (
        <div className="Game">
            <h4 className="score">Score: {score}/10</h4>
            <div>
                {gameOver
                    ?
                    <div>
                        <h3>Game Over!</h3>
                        <p>Your Score was: {score}</p>
                        <button onClick={startOver}>Start Over</button>
                    </div>
                    :
                    <Question
                        index={currQindex}
                        question={currQ.question}
                        incorrect={currQ.incorrect}
                        correct={currQ.correct}
                        questionAnswered={questionAnswered}
                        setQuestionAnswered={setQuestionAnswered}
                        score={score}
                        setScore={setScore}
                    />
                }
            </div>
            {questionAnswered && !gameOver
                ? <button onClick={getNextQuestion}>Next Question</button>
                : <></>
            }
        </div>
    );
}

export default Game;
