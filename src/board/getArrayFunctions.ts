export function getBoardArray(seaSize: number) {
  const boardArray = Array.from({ length: seaSize * seaSize }, (v, k) => k + 1);
  return boardArray;
}

function getRandomShip(seaSize: number) {
  const ship = Math.round(seaSize * seaSize * Math.random());
  return ship !== 0 ? ship : 1;
}

export function getShipsPlayer(numberOfShips: number, seaSize: number) {
  let ships: Array<number> = [];
  for (let i = 1; i <= numberOfShips; i++) {
    let ship;
    do {
      ship = getRandomShip(seaSize);
    } while (ships.includes(ship));
    ships = [...ships, ship];
  }
  return ships;
}

export function getShipsArray(min: number, max: number) {
  const shipsArray = Array.from({ length: max - min + 1 }, (v, k) => k + min);
  return shipsArray;
}
