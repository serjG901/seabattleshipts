import { useState } from "react";

export function Rulles() {
  const [isOpen, setIsOpen] = useState(false);
  const style = `
    text-gray-400
    cursor-pointer
    `;
  return (
    <div>
      <span
        className={isOpen ? style : `underline ${style}`}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        Game rulle
      </span>
      <div className="text-left max-w-mx text-gray-400" hidden={!isOpen}>
        <p>You're have several solo ships.</p>
        <p>They are distributed randomly across the playing field.</p>
        <p>Each player makes one move.</p>
        <p>Knock out all the ships from the enemy field!</p>
      </div>
    </div>
  );
}
