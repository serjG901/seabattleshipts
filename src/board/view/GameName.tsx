import { playerColor } from "../playerColorAndShip";

export function GameName() {
  return (
    <span className="text-6xl p-4 italic">
      <span className={`text-${playerColor.player1}`}>SEA</span>{" "}
      <span className={`text-${playerColor.player2}`}>BATTLESHIP</span>
    </span>
  );
}
