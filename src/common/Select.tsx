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
      <div className="flex justify-evenly w-72">
        {selectArray.map((item: number) => {
          return (
            <div
              key={item}
              className={`flex-1 cursor-pointer py-2 ${
                item === defaultValue
                  ? "text-blue-800 bg-blue-500 hover:bg-blue-500 shadow-md transform scale-125"
                  : "text-blue-500"
              }`}
              onClick={() => handleClick(item)}
            >
              {viewModificator(item)}
            </div>
          );
        })}
      </div>
      <p className="text-gray-400 border-t-2 border-solid border-blue-500">{labelText}</p>
    </div>
  );
}
