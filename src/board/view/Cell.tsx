import React from "react";

interface CellInterface {
  id: number;
  disabled: boolean;
  onTarget: (id: number) => void;
  xChoice: boolean;
}

export function Cell({ id, disabled, onTarget, xChoice }: CellInterface) {
  const enabledStyle = `
    w-8 
    text-black 
    cursor-pointer 
    rounded-xl
    bg-blue-100 
    hover:bg-red-100 
    `;
  const disabledStyle = `
    w-8 
    text-gray-200 
    cursor-not-allowed 
    `;

  return (
    <button
      className={disabled ? disabledStyle : enabledStyle}
      type="button"
      onClick={() => onTarget(id)}
      disabled={disabled}
    >
      {xChoice ? "x" : id}
    </button>
  );
}
