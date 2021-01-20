import { GameConnect } from "../connect/GameConnect";
import { GameName } from "./GameName";
import { GameSettingsConnect } from "../connect/GameSettingsConnect";
import { Rulles } from "./Rulles";

interface BoardInterface {
  play: boolean;
}

export function Board({ play }: BoardInterface) {
  return (
    <div
      className="
        p-2 
        h-screen
        flex 
        flex-col 
        items-center 
        justify-center
        text-center text-white"
    >
      {play ? (
        <GameConnect />
      ) : (
        <>
          <GameName />
          <GameSettingsConnect />
          <br />
          <Rulles />
        </>
      )}
    </div>
  );
}
