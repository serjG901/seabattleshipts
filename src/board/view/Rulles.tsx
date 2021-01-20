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
        Rulles the game
      </span>
      <div className="text-left max-w-md" hidden={!isOpen}>
        <p>You have several solo ships.</p>
        <p>They are distributed randomly across the playing field.</p>
        <p>The first move is made by the player who got the random choice.</p>
        <p>Each player makes one move, regardless of hitting the target.</p>
        <p>
          The winner is the player who knocks out all the ships from the enemy
          field.
        </p>
      </div>
    </div>
  );
}
