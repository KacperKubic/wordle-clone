import React, { useContext } from "react";
import { AppContext } from "../App";

const SingleKey = ({ keyValue, specialKey }) => {
    const { addLetter, deleteLetter, enter } = useContext(AppContext);

    const handleClick = () => {
        if(keyValue === "ENTER"){
            enter();
        }else if(keyValue === "DELETE"){
            deleteLetter();
        }else{
            addLetter(keyValue)
        }
    }

    return ( 
        <div className="singleKey" id={specialKey && "specialKey"} onClick={handleClick}>
            {keyValue}
        </div>
     );
}
 
export default SingleKey;