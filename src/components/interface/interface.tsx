interface boardState {
  board:string[]
  pos:number,
  row:number,
  key:string,
}

export interface rootState {
  board: boardState
}