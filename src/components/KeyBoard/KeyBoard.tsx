import React from 'react'
import './KeyBoard.css'
import Key from '../Key/Key'
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from '../interface/interface';
import { descreasePos, increaseRow, setBoard } from '../../Redux/boardSlice';
import wordlists from '../../words.json'
import Swal from 'sweetalert2';


export default function KeyBoard() {
  const rows:string[] = ["q w e r t y u i o p","a s d f g h j k l","z x c v b n m"];
  const pos = useSelector((state:rootState)=> state.board.pos)
  const board = useSelector((state:rootState)=> state.board.board)
  const row = useSelector((state:rootState)=> state.board.row)
  const correctWord = useSelector((state:rootState) => state.board.correctWord)
  const dispatch = useDispatch()
  let allWords:string[] = wordlists.words
  let board5Words: string = ''

  for(let i = 5;i>0;i--){
    board5Words += `${board[pos-i]}`
  }
  board5Words.toLowerCase()

  const clickBack = () => {
    if(Math.floor((pos-1)/5)< row) return;
    const newBoard = [...board]
    newBoard[pos-1] ="";
    dispatch(setBoard(newBoard))
    dispatch(descreasePos())
  }

  const clickEnter = () => {
    if(allWords.includes(board5Words.toLowerCase()) === false){
      if(pos%5!== 0  || pos === 0)
        Swal.fire(
          'Your word isnt completed',
          'Please complete your word',
          'question'
        )
        else {
          Swal.fire({
            title: 'Your words is invalid',
            text: "You need to retry your words, do you need we delete it for you ?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                `Your word in row ${row + 1} has been deleted.`,
                'success'
              )
              const newBoard = [...board]
              newBoard[pos-1] ="";
              newBoard[pos-2] ="";
              newBoard[pos-3] ="";
              newBoard[pos-4] ="";
              newBoard[pos-5] ="";
              dispatch(setBoard(newBoard))
              dispatch(descreasePos())
              dispatch(descreasePos())
              dispatch(descreasePos())
              dispatch(descreasePos())
              dispatch(descreasePos())
            
            }
          })
        }
    }
    else if(allWords.includes(board5Words.toLowerCase())){
      console.log('valid word');
      if((pos)%5===0 && pos!== 0 && row*5 < pos )dispatch(increaseRow())  
    }   
    if(pos === 30 && allWords.includes(board5Words.toLowerCase())) {
      Swal.fire('The word is :' + correctWord)
    }
    if(board5Words === correctWord){
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: `You have win this game with the correct anwser is ${correctWord} `,
        showConfirmButton: false,
        timer: 15000
      })
    }
    console.log(correctWord);
    
    
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
