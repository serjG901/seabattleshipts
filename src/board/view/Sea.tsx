import React from "react";
import { getBoardArray } from "../getArrayFunctions";
import { Cell } from "./Cell";
import { playerColor, playerShip } from "../playerColorAndShip";

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
    <div className={`w-1/2 p-2 text-${playerColor[player.name]}`}>
      <p>
        {player.name} have a{" "}
        <span className="font-bold">{player.ships.length}</span>{" "}
        {player.ships.length === 1 ? "ship" : "ships"}
      </p>
      <div
        className={`flex flex-wrap bg-blue-900 border-2 border-dashed border-black`}
      >
        {getBoardArray(seaSize).map((id) => {
          return (
            <div
              key={id}
              className={`w-1/${seaSize} ${playerShip[player.name]} ${
                player.destroyedShips.includes(id)
                  ? `bg-${playerColor[player.name]}`
                  : null
              }`}
            >
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
