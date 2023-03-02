import React, { useContext } from "react";
import { AppContext } from "../App";

const GameOver = () => {
    const {gameOver, setGameOver, correctWord, currentAttempt} = useContext(AppContext);

    return ( 
        <div className="gameOver">
            <h3>{gameOver.win ? "You guessed the correct word!" : "You failed to guess the correct word"}</h3>
            <h1>Correct anwser was: {correctWord}</h1>
            {gameOver.win && (<h3>It took you {currentAttempt.attempt} attempts to guess the word</h3>)}
        </div>
     );
}
 
export default GameOver;