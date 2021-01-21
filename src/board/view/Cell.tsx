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
    border-blue-100
    text-4xl
    `;

  const enabledStyle = `
    ${style} text-blue-900
    cursor-pointer 
    bg-blue-500 
    hover:bg-red-500 
    `;
  const disabledStyle = `
    ${style}
    text-blue-500
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
        {destroyed ?  <span className="text-blue-100">X</span> : <span style={{fontFamily:"sans-serif"}}>~</span>}
      </button>
    </div>
  );
}
