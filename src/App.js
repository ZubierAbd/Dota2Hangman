import React, { useState, useEffect } from 'react';
import './App.css';

import Header from './components/Header'
import Figure from './components/Figure'
import WrongLetters from './components/Wrongletters'
import Word from './components/Word'
import Popup from './components/Popup'
import Notification from './components/Notification'
import { showNotifications as show } from './helpers/Helpers'
import HeroData from './heroNames.json'


const words = HeroData;
let selectedWord = words[Math.floor(Math.random() * words.length)].toLowerCase();
/**These guys have to be up here otherwise the word changes everytime the app re renders */
console.log(HeroData)

function App() {

  /**JS Parts for the project */



  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const handleKeydown = event => {
      const { key, keyCode } = event;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters(currentLetters => [...currentLetters, letter]);
          } else {

          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters(currentLetters => [...currentLetters, letter]);
          } else {
            show(setShowNotification)
          }
        }
      }
    }
    window.addEventListener('keydown', handleKeydown);

    return () => window.removeEventListener('keydown', handleKeydown);
  }, [correctLetters, wrongLetters, playable]);
  //UseEffect [] means this only gets called once on load like ComponentDidMount, [someValue] means this gets called whenever that someValue changes. 
  //nothing there means it gets called anytime anything causes the app to re render

  const playAgain = () => {
    setPlayable(true)
    //Empty Arrays
    setCorrectLetters([])
    setWrongLetters([])
    ///Set new word
    selectedWord = words[Math.floor(Math.random() * words.length)].toLowerCase();
  }

  return (
    <>
      <Header></Header>
      <div className="game-container">
        <Figure wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />

      </div>
      <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayable={setPlayable} playAgain={playAgain} />
      {showNotification && <Notification />}

    </>
  );
}

export default App;
