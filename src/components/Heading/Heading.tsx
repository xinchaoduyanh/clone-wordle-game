import React from 'react'
import './Heading.css'
interface WordleProps {
  text: string
  type: string
}

export default function Wordle(WordleProps: WordleProps) {
  const {text,type} = WordleProps
  return (
    <p className={`heading-${type}` }>
        {text}
    </p>
  )
}
