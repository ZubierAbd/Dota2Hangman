import React, { useEffect } from 'react'
import { checkWin, toTitleCase } from '../helpers/Helpers'

const PopUp = ({ correctLetters, wrongLetters, selectedWord, setPlayable, playAgain }) => {
    let finalMessage = ''
    let finalMessageRevealWord = ''
    let playable = true;

    if (checkWin(correctLetters, wrongLetters, selectedWord) === 'win') {
        finalMessage = 'Congratulations You have won the game'
        playable = false
    } else if (checkWin(correctLetters, wrongLetters, selectedWord) === 'lose') {
        finalMessage = 'Unfortunately You have lost the game'
        finalMessageRevealWord = `The word was .... ${toTitleCase(selectedWord)}`
        playable = false
    }

    useEffect(() => {
        setPlayable(playable)
    })

    return (
        <div className="popup-container" style={finalMessage !== '' ? { display: 'flex' } : {}}>
            <div className="popup">
                <h2>{finalMessage}</h2>
                <h3>{finalMessageRevealWord}</h3>
                <button onClick={playAgain} >Play Again</button>
            </div>
        </div>
    )
}

export default PopUp
