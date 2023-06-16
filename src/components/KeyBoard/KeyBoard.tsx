import React from 'react'
import './KeyBoard.css'
import Key from '../Key/Key'
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from '../interface/interface';
import { descreasePos, increaseRow, setBoard } from '../../Redux/boardSlice';
export default function KeyBoard() {
  const rows:string[] = ["q w e r t y u i o p","a s d f g h j k l","z x c v b n m"];
  const pos = useSelector((state:rootState)=> state.board.pos)
  const board = useSelector((state:rootState)=> state.board.board)
  const dispatch = useDispatch()
  const clickBack = () => {
    // if(pos<0) return;
    const newBoard = [...board]
    newBoard[pos-1] ="";
    dispatch(setBoard(newBoard))
    dispatch(descreasePos())
  }
  const clickEnter = () => {
    if((pos)%5===0 && pos!== 0)dispatch(increaseRow())
    
  }
  return (
    <div className='keyboard-contaienr'>
      {rows.map((row,index)=> {
        return (
          <div className='row'>
            {row.split(" ").map((letter,idx)=> {
              return (
                <div className="letter-row">
                  {letter ==='z' && <span onClick={clickEnter}>Enter</span>}
                  <Key letter={letter.toUpperCase()} />
                  {letter === 'm' && <span onClick={clickBack}>Back</span>}
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}
