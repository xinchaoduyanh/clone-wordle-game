import React, { useState } from 'react'

import './Header.css';
import { useDispatch } from 'react-redux';
import { resetGame } from '../../Redux/boardSlice';
// interface HeaderProps {
//   onNewGameClick: 
// }
export default function Header() {
  const [showRule,setShowRule] = useState<boolean>(false)
  const onNewGameClick = () => {
    dispatch(resetGame())
    
  }
  const dispatch = useDispatch()
  const toggleRule = () => {
    setShowRule(showRule => !showRule)
    
  }
  return (
    <header className="header">
      <div className="logo"></div>
      <div className="buttons">
        <button onClick={onNewGameClick}>New Game</button>
        <button onClick={toggleRule}>Rule</button>
      </div>
      {showRule && (
        <div className="rule-popup">
          <div className="rule-content">
            <h2>Game Rules</h2>
            <p>Here are the rules of the game:</p>
            <ul>
              <li>The game Wordle consists of a secret five-letter word chosen by the computer.</li>
              <li>The player's goal is to guess the secret word within a limited number of attempts.</li>
              <li>The player has 6 rows to make their guesses.</li>
              <li>After each guess, the computer provides feedback on the correctness of the letters in the guessed word.</li>
              <li>If a letter in the guessed word matches a letter in the secret word and is in the correct position, the letter will be highlighted in green.</li>
              <li>If a letter in the guessed word matches a letter in the secret word but is in the wrong position, the letter will be highlighted in yellow.</li>
              <li>If a letter in the guessed word does not appear in the secret word, the letter will be highlighted in gray.</li>
              <li>If a letter in the guessed word does not appear in the secret word, the letter will be highlighted in gray.</li>
              {/* Add more rules */}
            </ul>
            <button onClick={toggleRule}>OK</button>
          </div>
        </div>
      )}
    </header>
  );
}
