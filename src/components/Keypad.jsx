import React, { useEffect, useState } from "react";

function Keypad({ usedKeys }) {
  const [letters, setLetters] = useState(null);
  useEffect(() => {
    fetch("https://my-json-server.typicode.com/kantesreenithin/wordle/letters")
      .then((res) => res.json())
      .then((json) => setLetters(json));
  }, []);
  return (
    <div className="keypad">
      {letters &&
        letters.map((letter) => {
          const color = usedKeys[letter.key];
          return (
            <div key={letter.key} className={color}>
              {letter.key}
            </div>
          );
        })}
    </div>
  );
}

export default Keypad;
