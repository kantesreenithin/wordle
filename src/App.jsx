import { useEffect, useState } from "react";
import Wordle from "./components/Wordle";

function App() {
  const [solution, setSolution] = useState(null);
  useEffect(() => {
    fetch(" https://my-json-server.typicode.com/kantesreenithin/wordle/solutions")
      .then((res) => res.json())
      .then((json) => {
        //random int between 0 to length
        const randomSolution = json[Math.floor(Math.random() * json.length)];
        setSolution(randomSolution.word);
      });
  }, [setSolution]);
  return (
    <div className="App">
      <h1>Wordle</h1>
      {solution && <Wordle solution={solution} />}
    </div>
  );
}

export default App;

/*
// data we need to track:
//   -- solution
//     -- 5 letter string, e.g. 'drain'
//   -- past guesses
//     -- an array of past guesses
//     -- each past guess is an array of letter objects [{}, {}, {}, {}, {}]
//     -- each object represents a letter in the guess word {letter: 'a', color: 'yellow'}
//   -- current guess
//     -- string 'hello'
//   -- keypad letters
//     -- array of letter objects [{key: 'a', color: 'green'}, {}, {} ...]
//   -- number of turns
//     -- an integer 0 - 6

// game process:
//   -- entering words:
//     -- user enters a letter & a square is filled with that letter
//     -- when a user hits delete it deletes the previous letter
//     -- when a user hits enter it submits the word
//       -- if all squares are not filled with letters then the word is not submitted
//       -- if that word has already been used in a prev guess then the word is not submitted
//   -- checking submitted words:
//     -- each letter is checked to see if it matches to the solution
//     -- each letter is assigned a color based on it's inclusion in the solution
//       -- exact matches (correct position in the solution) are green
//       -- partial matches (in the solution but not the correct position) are yellow
//       -- none-matches (not in the solution at all) are grey
//     -- the guess is added the grid with the correct colors
//     -- the current guess moves to the next row
//     -- the keypad letters are updated (colors)
//   -- ending the game:
//     -- when the guessed word fully matches the solution
//       -- modal to say 'well done'
//     -- when the user runs out of guesses
//       -- modal to say 'unlucky'
 */

//solution data:
//1 - 3rd part api
//2 own database mongodb
//3 json file
