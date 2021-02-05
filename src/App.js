import React from 'react';
import './App.css';
import Figure from './components/Figure';
import Header from './components/Header';
import WrongLetters from './components/WrongLetters.jsx';
import Word from './components/Word.jsx';


function App() {
  return (
    <div className = "game-container">
      <Header />
      <Figure />
      <WrongLetters />
      <Word />
    </div>
  );
}

export default App;
