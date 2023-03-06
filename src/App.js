import React, { createContext, useEffect, useState } from 'react';
import './App.css';
import Gameboard from './components/Gameboard';
import GameOver from './components/GameOver';
import Keyboard from './components/Keyboard';
import { gameboardInitial } from './Data';
import { generateWordSet  } from './Data';

export const AppContext = createContext();

const App = () => {
  //States that are then passed to app context
  const [gameboard, setGameboard] = useState(gameboardInitial);
  const [currentAttempt, setCurrentAttempt] = useState({attempt: 0, letterPosition: 0})
  const [wordSet, setWordSet] = useState(new Set())
  const [wrongLetters, setWrongLetters] = useState([]);
  const [closeLetters, setCloseLetters] = useState([]);
  const [correctLetters, setCorrectLetters] = useState([])
  const [gameOver, setGameOver] = useState({gameOver: false, win: false})
  const [correctWord, setCorrectWord] = useState("")

  //Functions to add/delete letter and submit your anwser
  const addLetter = (keyValue) => {
    if(currentAttempt.letterPosition > 4 ) return;
      const newGameboardoard = [...gameboard]
      newGameboardoard[currentAttempt.attempt][currentAttempt.letterPosition] = keyValue;
      setGameboard(newGameboardoard);
      setCurrentAttempt({...currentAttempt, letterPosition: currentAttempt.letterPosition + 1})
  }
  
  const deleteLetter = () => {
    if(currentAttempt.letterPosition === 0) return;
      const newGameboardoard = [...gameboard]
      newGameboardoard[currentAttempt.attempt][currentAttempt.letterPosition - 1] = "";
      setGameboard(newGameboardoard)
      setCurrentAttempt({...currentAttempt, letterPosition: currentAttempt.letterPosition - 1})
  }
  
  
  const enter = () => {
    console.log(wordSet)
    if(currentAttempt.letterPosition <= 4) return;
    let currentWord = "";
    for (let i = 0; i < 5; i++){
      currentWord += gameboard[currentAttempt.attempt][i]
    }

    if(wordSet.has(currentWord.toLowerCase())){
      setCurrentAttempt({attempt: currentAttempt.attempt + 1, letterPosition: 0});
    }else{
      alert("Word not found in words database")
    }

    if(currentWord.toLowerCase() === correctWord){
      setGameOver({gameOver: true, win: true});
      return;
    }

    if(currentAttempt.attempt === 5){
      setGameOver({gameOver: true, win: false});
    }
  }

  
  //Generate new word set (to check if word exist) and select correct word
  useEffect(() => {
    generateWordSet().then((words) => {
      setWordSet(words.wordSet)
      setCorrectWord(words.todayWord)
    })
  }, [])
  

  return (
    <div className="app">
      <nav>
        <h1>Wordle</h1>
      </nav>
      <AppContext.Provider value={{ gameboard, setGameboard, currentAttempt, setCurrentAttempt, addLetter, deleteLetter, enter, correctWord, wrongLetters, setWrongLetters, correctLetters, setCorrectLetters, closeLetters, setCloseLetters, gameOver, setGameOver }}>
      {/*If game over is true display gameover component*/}
      {gameOver.gameOver ? 
        <div className="game_over_content">
          <Gameboard/>
          <Keyboard />
          <GameOver />
        </div> : 
        <div className="game_content">
          <Gameboard/>
          <Keyboard />
        </div>
      }
      </AppContext.Provider>
    </div>
  );
}

export default App;
