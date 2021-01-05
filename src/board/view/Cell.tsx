import React from "react";

interface CellInterface {
  id: number;
  disabled: boolean;
  onTarget: (id: number) => void;
  destroyed: boolean;
}

export function Cell({ id, disabled, onTarget, destroyed }: CellInterface) {
  const enabledStyle = `
    h-16
    w-full 
    text-white 
    cursor-pointer 
    rounded-full
    bg-blue-500 
    hover:bg-red-500 
    `;
  const disabledStyle = `
    h-16
    w-full
    text-gray-200 
    cursor-not-allowed 
    `;

  return (
    <div>
      <button
        className={disabled ? disabledStyle : enabledStyle}
        type="button"
        onClick={() => onTarget(id)}
        disabled={disabled}
      >
        {destroyed ? "x" : "~"}
      </button>
    </div>
  );
}
