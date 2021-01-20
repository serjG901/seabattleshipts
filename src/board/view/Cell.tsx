interface CellInterface {
  id: number;
  disabled: boolean;
  onTarget: (id: number) => void;
  destroyed: boolean;
}

export function Cell({ id, disabled, onTarget, destroyed }: CellInterface) {
  const style = `
    h-16
    w-full
    border 
    border-solid 
    border-blue-900
    text-4xl
    text-blue-900
    `;

  const enabledStyle = `
    ${style}
    cursor-pointer 
    bg-blue-500 
    hover:bg-red-500 
    `;
  const disabledStyle = `
    ${style}
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
