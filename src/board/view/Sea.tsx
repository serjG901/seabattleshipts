import { getBoardArray } from "../getArrayFunctions";
import { Cell } from "./Cell";
import { playerColor, playerShipDirection } from "../playerColorAndShip";
import { ShipView } from "./ShipView";

interface PlayerInterface {
  name: string;
  move: Array<number>;
  ships: Array<number>;
  destroyedShips: Array<number>;
}

interface SeaInterface {
  seaSize: number;
  currentPlayer: string | null;
  player: PlayerInterface;
  oponent: PlayerInterface;
  onTarget: (id: number) => void;
}

export function Sea({
  seaSize,
  currentPlayer,
  player,
  oponent,
  onTarget,
}: SeaInterface) {
  return (
    <div className={`w-1/2 px-2 pb-2 bg-blue-900 text-${playerColor[player.name]}`}>
      <p>
        {player.name} / {player.ships.length} left
      </p>
      <div className={`flex flex-wrap`}>
        {getBoardArray(seaSize).map((id) => {
          return (
            <div
              key={id}
              className={`
                relative 
                w-1/${seaSize} 
                ${
                  player.destroyedShips.includes(id)
                    ? `bg-${playerColor[player.name]}`
                    : null
                }`}
            >
              {player.destroyedShips.includes(id) ? (
                <ShipView direction={playerShipDirection[player.name]} />
              ) : null}
              <Cell
                id={id}
                disabled={
                  currentPlayer === player.name || oponent.move.includes(id)
                }
                onTarget={onTarget}
                destroyed={player.destroyedShips.includes(id)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
