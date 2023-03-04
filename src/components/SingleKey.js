import React, { useContext } from "react";
import { AppContext } from "../App";

const SingleKey = ({ keyValue, specialKey, correct, close, wrong }) => {
    const { addLetter, deleteLetter, enter } = useContext(AppContext);

    //On click add/delete letter or submit anwser
    const handleClick = () => {
        if(keyValue === "ENTER"){
            enter();
        }else if(keyValue === "DELETE"){
            deleteLetter();
        }else{
            addLetter(keyValue)
        }
    }

    // depending if the letter is already in one of the arreys containing correctly/wrong guessed letter set key id
    return ( 
        <div className="singleKey" id={specialKey ? "specialKey" : correct ? "correct" : close ? "close" : wrong && "wrong"} onClick={handleClick}>
            {keyValue}
        </div>
     );
}
 
export default SingleKey;