interface StringStringInterface {
  [key: string]: string;
}

export const playerColor: StringStringInterface = {
  player1: "green-500",
  player2: "yellow-500",
};

export const playerShip: StringStringInterface = {
  player1: "rounded-l-none rounded-r-full",
  player2: "rounded-r-none rounded-l-full",
};
