import React from "react";
import { TextWithExplane } from "../../common/TextWithExplane";
import { SeaConnect } from "../connect/SeaConnect";
import { PlayAgainConnect } from "../connect/PlayAgainConnect";

interface GameInterface {
  winner: string | null;
  currentPlayer: string | null;
}

export function Game({ winner, currentPlayer }: GameInterface) {
  return winner ? (
    <>
      <TextWithExplane explane="Winner the game" union="-" text={winner} />
      <br />
      <PlayAgainConnect />
    </>
  ) : (
    <div className="flex flex-col">
      <TextWithExplane explane="Next move" union="-" text={currentPlayer} />
      <div className="flex justify-center">
        <SeaConnect seaOwner={"player1"} />
        <SeaConnect seaOwner={"player2"} />
      </div>
    </div>
  );
}
