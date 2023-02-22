import { createContext, useState } from 'react';
import './App.css';
import Gameboard from './components/Gameboard';
import { gameboardInitial } from './Data';

export const AppContext = createContext();

const App = () => {
  const [gameboard, setGameboard] = useState(gameboardInitial);

  return (
    <div className="app">
      <nav>
        <h1>Wordle</h1>
      </nav>
      <AppContext.Provider value={{ gameboard, setGameboard}}>
        <Gameboard/>
      </AppContext.Provider>
    </div>
  );
}

export default App;
