interface SelectInterface {
  labelText: string;
  defaultValue: number;
  selectArray: Array<number>;
  setValue: (value: number) => void;
  viewModificator: (value: number) => string;
}

export function Select({
  labelText,
  defaultValue,
  selectArray,
  setValue,
  viewModificator,
}: SelectInterface) {
  function handleClick(value: number) {
    setValue(Number(value));
  }

  return (
    <div>
      <p className="text-gray-400">{labelText}</p>
      <div className="flex justify-evenly w-72">
        {selectArray.map((item: number) => {
          return (
            <div
              key={item}
              className={`flex-1 cursor-pointer py-2 ${
                item === defaultValue
                  ? "border border-solid border-gray-400 transform scale-125"
                  : ""
              }`}
              onClick={() => handleClick(item)}
            >
              {viewModificator(item)}
            </div>
          );
        })}
      </div>
    </div>
  );
}
