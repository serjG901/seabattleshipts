import { playerColor } from "../playerColorAndShip";

export function GameName() {
  return (
    <div className="text-7xl italic">
      <span className={`text-${playerColor.player1}`}>SEA</span>
      <span className={`text-${playerColor.player2}`}>BATTLE</span>
    </div>
  );
}
