interface ButtonInterface {
  text: string;
  onClick: () => void;
}

export function Button({ text, onClick }: ButtonInterface) {
  const style = `
    py-2
    px-4 
    bg-blue-500 
    hover:bg-blue-400 
    text-blue-900
    shadow-none
    hover:shadow-md
    cursor-pointer
    focus:outline-none 
    focus:shadow-outline
    `;

  return (
    <button onClick={onClick} className={style}>
      {text}
    </button>
  );
}
