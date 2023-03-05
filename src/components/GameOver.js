import React, { useContext } from "react";
import { AppContext } from "../App";

const GameOver = () => {
    const {gameOver, correctWord, currentAttempt} = useContext(AppContext);

    return ( 
        <div className="gameOver">
            <div className="gameOver_content">
                <div className="gameOver_content_text">
                    <h1>{gameOver.win ? "You guessed the correct word!" : "You failed to guess the correct word"}</h1>
                    <h2>Correct anwser was: {correctWord}</h2>
                    {gameOver.win && (<h3>It took you {currentAttempt.attempt} attempts to guess the word</h3>)}
                </div>
            </div>
        </div>
     );
}
 
export default GameOver;