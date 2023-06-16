import React from 'react'
import './Key.css'
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from '../interface/interface';
import { increasePos, setBoard } from '../../Redux/boardSlice';
interface KeyProps {
  letter:string
}

export default function Key(KeyProps: KeyProps) {
  const {letter} = KeyProps;
  const board = useSelector((state:rootState)=> state.board.board)
  const pos = useSelector((state:rootState)=> state.board.pos)
  const row = useSelector((state:rootState)=> state.board.row)
  const dispatch = useDispatch();
  let currentRow = Math.floor(pos/5)
  const ChoseLetter = () => {
    if(pos>29) return;
    if(currentRow > row) return;
     const newBoard = [...board]
     newBoard[pos] = letter
     dispatch(setBoard(newBoard))
     dispatch(increasePos())
  }
  return (
    <div className='letter' onClick={()=>ChoseLetter()}>{letter}</div>
  )
}
