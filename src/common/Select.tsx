import React from "react";

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
  
  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setValue(Number(event.target.value));
  }

  return (
    <div>
      <label>{labelText}</label>
      <br />
      <select defaultValue={defaultValue} onChange={handleChange}>
        {selectArray.map((item) => {
          return (
            <option key={item} value={item}>
              {viewModificator(item)}
            </option>
          );
        })}
      </select>
    </div>
  );
}
