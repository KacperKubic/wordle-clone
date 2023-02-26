import React, { useContext } from "react";
import { AppContext } from "../App";

const Letter = ({ letterPosition, attemptNumber}) => {
    const { gameboard, correctWord, currentAttempt } = useContext(AppContext);
    const letter = gameboard[attemptNumber][letterPosition]
    const correct = correctWord[letterPosition] === letter;
    const close = !correct && letter !== "" && correctWord.includes(letter)
    const letterState = currentAttempt.attempt > attemptNumber && (correct ? "correct" : close ? "close" : "wrong")
    
    return ( 
        <div className="letter" id={letterState}>
            {letter}
        </div>
     );
}
 
export default Letter;