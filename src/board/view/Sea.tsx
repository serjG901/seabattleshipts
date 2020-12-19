import React from "react";
import { getBoardArray } from "../getArrayFunctions";
import { Cell } from "./Cell";

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
    <div className="w-1/2 p-2">
      <p>{player.name}</p>
      <p>have a </p>
      <p>
        <span className="font-bold">{player.ships.length}</span>{" "}
        {player.ships.length === 1 ? "ship" : "ships"}
      </p>
      {getBoardArray(seaSize).map((id) => {
        return (
          <span
            key={id}
            className="rounded-r-none rounded-l-xl"
            style={
              player.destroyedShips.includes(id)
                ? { background: "#f00" }
                : { background: "none" }
            }
          >
            <Cell
              id={id}
              disabled={
                currentPlayer === player.name || oponent.move.includes(id)
              }
              onTarget={onTarget}
              xChoice={oponent.move.includes(id)}
            />
            {id % seaSize ? null : <br />}
          </span>
        );
      })}
    </div>
  );
}
