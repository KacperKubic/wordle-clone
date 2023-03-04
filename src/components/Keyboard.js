import React, { useCallback, useContext, useEffect} from "react";
import { AppContext } from "../App";
import SingleKey from "./SingleKey";
import { MdOutlineBackspace } from 'react-icons/md'

const Keyboard = () => {
    const { enter, deleteLetter, addLetter, wrongLetters, closeLetters, correctLetters } = useContext(AppContext);

    //Array of letters in each keyboard row
    const lineOne = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const lineTwo = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const lineThree = ["Z", "X", "C", "V", "B", "N", "M"];
    
    //Add event to each keyboard key to do something on press (either add/delate letter or submit anwser)
    const handleKeyPress = useCallback((event) => {
        if(event.key === "Enter"){
            enter()
        }else if (event.key === "Backspace"){
            deleteLetter()
        }else{
            lineOne.forEach((key) => {
                if(event.key.toUpperCase() === key){
                    addLetter(key)
                }
            })
            lineTwo.forEach((key) => {
                if(event.key.toUpperCase()  === key){
                    addLetter(key)
                }
            })
            lineThree.forEach((key) => {
                if(event.key.toUpperCase()  === key){
                    addLetter(key)
                }
            })
        }
    })

    useEffect(() => {
        document.addEventListener("keydown", handleKeyPress)
        return () => {
            document.removeEventListener("keydown", handleKeyPress)
        }
    }, [handleKeyPress])

    return ( 
        <div className="keyboard" onKeyDown={handleKeyPress}>
            {/*Mapping through each of the arrays created on top of the file and displaying a "singleKey" component for each letter*/}
            <div className="keyboard_line_one">
                {lineOne.map((singleKey) => {
                    return <SingleKey id={singleKey} keyValue={singleKey} wrong={wrongLetters.includes(singleKey)} correct={correctLetters.includes(singleKey)} close={closeLetters.includes(singleKey)}/>
                })}
            </div>
            <div className="keyboard_line_two">
                {lineTwo.map((singleKey) => {
                    return <SingleKey id={singleKey} keyValue={singleKey}  wrong={wrongLetters.includes(singleKey)} correct={correctLetters.includes(singleKey)} close={closeLetters.includes(singleKey)}/>
                })}
            </div>
            <div className="keyboard_line_three">
                <SingleKey keyValue={"ENTER"} specialKey />
                {lineThree.map((singleKey) => {
                    return <SingleKey id={singleKey} keyValue={singleKey}  wrong={wrongLetters.includes(singleKey)} correct={correctLetters.includes(singleKey)} close={closeLetters.includes(singleKey)}/>
                })}
                <SingleKey keyValue={<MdOutlineBackspace/>} specialKey/>
            </div>
        </div>
     );
}
 
export default Keyboard;