import React from 'react'

const Wrongletters = ({ wrongLetters }) => {
    return (
        <div className="wrong-letters-container">
            <div>
                {
                    wrongLetters.length > 0 && <p>Wrong</p>
                }
                {
                    wrongLetters.map((letter, index) => <span key={index}>{letter}</span>)
                        .reduce(
                            (prev, curr) => prev === null ? [curr] : [prev, ' , ', curr], null //Using the reduce function to ensure that there are commas between the words that are being mapped
                        )
                }

            </div>
        </div>
    )
}

export default Wrongletters
