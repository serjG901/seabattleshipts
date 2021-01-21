import { createSlice } from "@reduxjs/toolkit";

interface PlayerInterface {
  name: string;
  move: Array<number>;
  ships: Array<number>;
  destroyedShips: Array<number>;
}

interface KeyStringInterface {
  [key: string]: any;
}

interface BoardInterface extends KeyStringInterface {
  selectSeaSize: Array<number>;
  seaSize: number;
  numberOfShips: number;
  play: boolean;
  currentPlayer: string | null;
  winner: string | null;
  player1: PlayerInterface;
  player2: PlayerInterface;
}

interface StateInterface {
  board: BoardInterface;
}

function initialBoard(): BoardInterface {
  return {
    selectSeaSize: [3, 4, 5],
    seaSize: 3,
    numberOfShips: 3,
    play: false,
    currentPlayer: null,
    winner: null,
    player1: {
      name: "player1",
      move: [],
      ships: [],
      destroyedShips: [],
    },
    player2: {
      name: "player2",
      move: [],
      ships: [],
      destroyedShips: [],
    },
  };
}

export const boardSlice = createSlice({
  name: "board",
  initialState: initialBoard(),
  reducers: {
    reset: (state) => {
      state.currentPlayer = null;
      state.play = false;
      state.winner = null;
      state.player1 = {
        name: "player1",
        move: [],
        ships: [],
        destroyedShips: [],
      };
      state.player2 = {
        name: "player2",
        move: [],
        ships: [],
        destroyedShips: [],
      };
    },
    seaSize: (state, action) => {
      state.seaSize = action.payload;
      state.numberOfShips = action.payload;
    },
    numberOfShips: (state, action) => {
      state.numberOfShips = action.payload;
    },
    play: (state, action) => {
      state.play = true;
      state.currentPlayer = action.payload;
    },
    winner: (state, action) => {
      state.winner = action.payload;
    },
    movePlayer1: (state, action) => {
      state.player1.move = [...state.player1.move, action.payload];
      window.navigator.vibrate([200]);
      if (state.player2.ships.includes(action.payload)) {
        state.player2.ships = state.player2.ships.filter(
          (ship) => ship !== action.payload
        );
        state.player2.destroyedShips.push(action.payload);
        window.navigator.vibrate([200, 50, 500]);
      }
      if (state.player2.ships.length === 0) {
        state.winner = "player1";
        window.navigator.vibrate([
          200,
          50,
          200,
          50,
          500,
          50,
          500,
          50,
          500,
          50,
          200,
        ]);
      }
      state.currentPlayer = "player2";
    },
    shipsPlayer1: (state, action) => {
      state.player1.ships = action.payload;
    },
    movePlayer2: (state, action) => {
      state.player2.move = [...state.player2.move, action.payload];
      window.navigator.vibrate([200]);
      if (state.player1.ships.includes(action.payload)) {
        state.player1.ships = state.player1.ships.filter(
          (ship) => ship !== action.payload
        );
        state.player1.destroyedShips.push(action.payload);
        window.navigator.vibrate([200, 50, 500]);
      }
      if (state.player1.ships.length === 0) {
        state.winner = "player2";
        window.navigator.vibrate([
          200,
          50,
          200,
          50,
          500,
          50,
          500,
          50,
          500,
          50,
          200,
        ]);
      }
      state.currentPlayer = "player1";
    },
    shipsPlayer2: (state, action) => {
      state.player2.ships = action.payload;
    },
  },
});

export const {
  reset,
  seaSize,
  numberOfShips,
  play,
  winner,
  movePlayer1,
  shipsPlayer1,
  movePlayer2,
  shipsPlayer2,
} = boardSlice.actions;

export const selectBoard = (state: StateInterface) => state.board;

export default boardSlice.reducer;
