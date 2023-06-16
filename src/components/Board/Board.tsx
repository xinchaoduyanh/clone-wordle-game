import React from 'react'
import Square from '../Square/Square'
import './Board.css'

interface BoardProps {
  board: string[]
}
export default function Board(BoardProps: BoardProps) {
  const {board} = BoardProps
  return (
    <>
      <div className="board">
        {
          board.map((square,index)=> {
            return (
              <>
                <Square val={square} index={index}  />
              </>
            )
          })
        }
      </div>
    </>
  )
}
