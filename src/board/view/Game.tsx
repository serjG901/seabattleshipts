import { TextWithExplane } from "../../common/TextWithExplane";
import { SeaConnect } from "../connect/SeaConnect";
import { PlayAgainConnect } from "../connect/PlayAgainConnect";
import { playerColor } from "../playerColorAndShip";

interface GameInterface {
  winner: string | null;
  currentPlayer: string | null;
}

export function Game({ winner, currentPlayer }: GameInterface) {
  return winner ? (
    <>
      <TextWithExplane
        explane="Winner the game"
        union="-"
        text={winner}
        color={currentPlayer !== null ? playerColor[winner] : undefined}
      />
      <br />
      <PlayAgainConnect />
    </>
  ) : (
    <div className="flex flex-col">
      <TextWithExplane
        explane="Next move"
        union="-"
        text={currentPlayer}
        color={currentPlayer !== null ? playerColor[currentPlayer] : undefined}
      />
      <div className="flex w-screen justify-center">
        <SeaConnect seaOwner={"player1"} />
        <SeaConnect seaOwner={"player2"} />
      </div>
    </div>
  );
}
