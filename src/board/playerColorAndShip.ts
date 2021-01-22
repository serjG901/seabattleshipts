interface StringStringInterface {
  [key: string]: string;
}

const colorsPlayer1: Array<string> = [
  "green-700",
  "pink-700",
];

const colorsPlayer2: Array<string> = [
  "yellow-700",
  "purple-700",
];

export const playerColor: StringStringInterface = {
  player1: colorsPlayer1[Math.floor(Math.random() * colorsPlayer1.length)],
  player2: colorsPlayer2[Math.floor(Math.random() * colorsPlayer2.length)],
};

export const playerShipDirection: StringStringInterface = {
  player1: "right-0",
  player2: "left-0",
};
