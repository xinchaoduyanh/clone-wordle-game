import React, { useState } from 'react'


import './App.css'
import Heading from './components/Heading/Heading'
import Board from './components/Board/Board'
import KeyBoard from './components/KeyBoard/KeyBoard'
import { useSelector } from 'react-redux'
import { rootState } from './components/interface/interface'
import Header from './components/Header/Header'

function App() {
  const board = useSelector((state:rootState)=> state.board.board)

  return (
   <>
      <Header />
      <div className='App'>
         <Heading type='h1' text='Wordle' />
          <Heading type='subtitle' text='Another game for kids' />
          <div className="board-container">
           <Board board={board}/>
          </div>
          <div className="key-board">
           <KeyBoard />
          </div>
      </div>
   </>
  )
}

export default App
