import React, { createContext, useState } from 'react';
import './App.css';
import Gameboard from './components/Gameboard';
import Keyboard from './components/Keyboard';
import { gameboardInitial } from './Data';

export const AppContext = createContext();

const App = () => {
  const [gameboard, setGameboard] = useState(gameboardInitial);
  const [currentAttempt, setCurrentAttempt] = useState({attempt: 0, letterPosition: 0})
  const correctWord = "WATER";

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
    if(currentAttempt.letterPosition <= 4) return;
    setCurrentAttempt({attempt: currentAttempt.attempt + 1, letterPosition: 0})
  }
  
  

  return (
    <div className="app">
      <nav>
        <h1>Wordle</h1>
      </nav>
      <AppContext.Provider value={{ gameboard, setGameboard, currentAttempt, setCurrentAttempt, addLetter, deleteLetter, enter, correctWord }}>
        <div className="game_content">
          <Gameboard/>
          <Keyboard />
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
