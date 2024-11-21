import { Select } from "../../common/Select";
import { PlayConnect } from "../connect/PlayConnect";

interface GameSettingsInterface {
  seaSize: number;
  seaSizeArray: Array<number>;
  setSeaSize: (value: number) => void;
  numberOfShips: number;
  numberOfShipsArray: Array<number>;
  setNumberOfShips: (value: number) => void;
}

export function GameSettings({
  seaSize,
  seaSizeArray,
  setSeaSize,
  numberOfShips,
  numberOfShipsArray,
  setNumberOfShips,
}: GameSettingsInterface) {
  return (
    <div className="m-4">
      <Select
        labelText="Field size"
        defaultValue={seaSize}
        selectArray={seaSizeArray}
        setValue={setSeaSize}
        viewModificator={(size: number) => `${size}x${size}`}
      />
      <Select
        labelText="Number of ships"
        defaultValue={numberOfShips}
        selectArray={numberOfShipsArray}
        setValue={setNumberOfShips}
        viewModificator={(number: number) => `${number}`}
      />
      <PlayConnect />
    </div>
  );
}
