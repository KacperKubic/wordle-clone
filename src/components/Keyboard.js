import React, { useCallback, useContext, useEffect } from "react";
import { AppContext } from "../App";
import SingleKey from "./SingleKey";

const Keyboard = () => {
    const { enter, deleteLetter, addLetter } = useContext(AppContext);

    const lineOne = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const lineTwo = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const lineThree = ["Z", "X", "C", "V", "B", "N", "M"];
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
            <div className="keyboard_line_one">
                {lineOne.map((singleKey) => {
                    return <SingleKey keyValue={singleKey} />
                })}
            </div>
            <div className="keyboard_line_two">
                {lineTwo.map((singleKey) => {
                    return <SingleKey keyValue={singleKey} />
                })}
            </div>
            <div className="keyboard_line_three">
                <SingleKey keyValue={"ENTER"} specialKey />
                {lineThree.map((singleKey) => {
                    return <SingleKey keyValue={singleKey} />
                })}
                <SingleKey keyValue={"DELETE"} specialKey/>
            </div>
        </div>
     );
}
 
export default Keyboard;