interface StringStringInterface {
  [key: string]: string;
}

const colorsPlayer1: Array<string> = ["green-500", "black", "purple-500"];

const colorsPlayer2: Array<string> = ["yellow-500", "white", "pink-500"];

export const playerColor: StringStringInterface = {
  player1: colorsPlayer1[Math.floor(Math.random() * colorsPlayer1.length)],
  player2: colorsPlayer2[Math.floor(Math.random() * colorsPlayer2.length)],
};

export const playerShip: StringStringInterface = {
  player1: "right-0",
  player2: "left-0",
};
