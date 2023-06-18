
import {createSlice} from '@reduxjs/toolkit'
import wordlist from '../words.json'
let randomNum = Math.floor(Math.random()* wordlist.words.length)
const initialState = {
  board: [
    "","","","","",
    "","","","","",
    "","","","","",
    "","","","","",
    "","","","","",
    "","","","","",
  ],
  pos: 0,
  row: 0,
  key: "",
  correctWord: wordlist.words[randomNum].toUpperCase()
}
export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    setBoard : (state,action) => {
      state.board = action.payload
    },
    increasePos : (state)=> {
      state.pos++;
    },
    descreasePos : (state) => {
      state.pos--;
    },
    increaseRow : (state) => {
      state.row++;
    },
    setKey: (state,action) => {
      state.key = action.payload
    }
  }

})
export const {
  setBoard,
  increasePos,
  descreasePos,
  increaseRow,
  setKey
} = boardSlice.actions

export default boardSlice.reducer;