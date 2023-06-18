import React, { useEffect, useState } from 'react'
import './Square.css'
import {motion} from 'framer-motion'
import { useSelector } from 'react-redux'
import { rootState } from '../interface/interface'
interface SquareProps {
  val: string
  index: number
}
export default function Square(SquareProps: SquareProps) {
  const { val,index} = SquareProps  
  const correctWord = useSelector((state:rootState) => state.board.correctWord)
  const pos = useSelector((state:rootState) => state.board.pos)
  const reduxRow = useSelector((state:rootState) => state.board.row)
  const [correct,setCorrect] = useState<boolean>(false)
  const [almost,setAlmost] = useState<boolean>(false)
  const [wrong,setWrong] = useState<boolean>(false)
  const status: any = (reduxRow > Math.floor(index/5) ) &&(correct ? "correct" :almost ? "almost" : wrong ? "wrong" : "")
  const variants = {
    filled: () => ({
      scale: [1.2,1],
      transition: {
        duration: 0.2
      }
    }),
    unfilled: () => ({
      scale: [1.2,1],
      transition: {
        duration: 0.2
      }
    }),
  }
  useEffect(()=> {
    if(correctWord[(pos-1) % 5] === val) {
      setCorrect(true)
    
    }
    else if (!correct && val !== "" && correctWord.includes(val)){
      setAlmost(true)
    }
    else setWrong(true) 
    return () => {
      setCorrect(false)
      setAlmost(false)
      setWrong(false)
    };
    console.log(val);
    
  },[val])
  return (
    <motion.div animate={val ? "filled" : "unfilled"} variants={variants} >
      <div className="square" id={ status} >
        {val}
      </div>
    </motion.div>
   
  )
}
