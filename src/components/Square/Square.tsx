import React from 'react'
import './Square.css'
import {motion} from 'framer-motion'
interface SquareProps {
  val: string
  index: number
}
export default function Square(SquareProps: SquareProps) {
  const { val,index} = SquareProps  
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
  return (
    <motion.div animate={val ? "filled" : "unfilled"} variants={variants} >
      <div className="square">
        {val}
      </div>
    </motion.div>
   
  )
}
