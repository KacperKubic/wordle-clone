import { useContext } from "react";
import { AppContext } from "../App";

const Letter = ({ letterPosition, attemptNumber}) => {
    const { gameboard } = useContext(AppContext);
    const letter = gameboard[attemptNumber][letterPosition]
    
    return ( 
        <div className="letter">
            {letter}
        </div>
     );
}
 
export default Letter;