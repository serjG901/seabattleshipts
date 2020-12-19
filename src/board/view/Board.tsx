import React from "react";
import { GameConnect } from "../connect/GameConnect";
import { GameName } from "./GameName";
import { GameSettingsConnect } from "../connect/GameSettingsConnect";
import { Rulles } from "./Rulles";

interface BoardInterface {
  play: boolean;
}

export function Board({ play }: BoardInterface) {
  return (
    <div className="p-4 flex flex-col items-center justify-center text-center">
      <GameName />
      {play ? <GameConnect /> : <GameSettingsConnect />}
      <br />
      <Rulles />
    </div>
  );
}
