
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
    },
    resetGame: (state) => {
      const randomNum = Math.floor(Math.random() * wordlist.words.length);
      state.board = [
        '', '', '', '', '',
        '', '', '', '', '',
        '', '', '', '', '',
        '', '', '', '', '',
        '', '', '', '', '',
        '', '', '', '', '',
      ];
      state.pos = 0;
      state.row = 0;
      state.key = '';
      state.correctWord = wordlist.words[randomNum].toUpperCase();
    },
  }

})
export const {
  setBoard,
  increasePos,
  descreasePos,
  increaseRow,
  setKey,
  resetGame
} = boardSlice.actions

export default boardSlice.reducer;