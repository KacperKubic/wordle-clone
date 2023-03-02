import React, { useContext, useEffect } from "react";
import { AppContext } from "../App";

const Letter = ({ letterPosition, attemptNumber}) => {
    const { gameboard, correctWord, currentAttempt, setWrongLetters, setCorrectLetters, setCloseLetters } = useContext(AppContext);
    const letter = gameboard[attemptNumber][letterPosition]
    const correct = correctWord.toUpperCase()[letterPosition] === letter;
    const close = !correct && letter !== "" && correctWord.toUpperCase().includes(letter)
    const letterState = currentAttempt.attempt > attemptNumber && (correct ? "correct" : close ? "close" : "wrong")

    useEffect(() => {
        if(letter !== "" && !correct && !close){
            setWrongLetters((previous) => [...previous, letter])
        }else if(letter !== "" && !correct){
            setCloseLetters((previous) => [...previous, letter]);
        }else if(letter !== "" && !close){
            setCorrectLetters((previous) => [...previous, letter])
        }
    }, [currentAttempt.attempt])
    
    return ( 
        <div className="letter" id={letterState}>
            {letter}
        </div>
     );
}
 
export default Letter;