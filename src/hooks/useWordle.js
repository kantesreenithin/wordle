import { useState } from "react";

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0); //try/chances
  const [currentGuess, setCurrentGuess] = useState(""); //what is cur guess
  const [guesses, setGuesses] = useState([...Array(6)]); //each guess is an array
  const [history, setHistory] = useState([]); //each guess is a string
  const [isCorrect, setIsCorrect] = useState(false);
  const [usedKeys, setUsedKeys] = useState({}); //{a:'green',b:'yellow',c:'grey'}

  //format a guess into an array of letter objects
  //eg:{key:'a',color:'yellow'}
  const formatGuess = () => {
    let solutionArray = [...solution];
    let formattedGuess = [...currentGuess].map((letter) => {
      return { key: letter, color: "grey" };
    });

    //find green letters
    formattedGuess.forEach((letter, i) => {
      if (solution[i] === letter.key) {
        formattedGuess[i].color = "green";
        solutionArray[i] = null;
      }
    });
    //find any yellow letters
    formattedGuess.forEach((letter, i) => {
      if (solutionArray.includes(letter.key) && letter.color !== "green") {
        formattedGuess[i].color = "yellow";
        solutionArray[solutionArray.indexOf(letter.key)] = null;
      }
    });

    return formattedGuess;
  };

  //add a new guess to guesses state
  //update the isCorrect state if the guess is correct
  //add one to turn state
  const addNewGuess = (formattedGuess) => {
    if (currentGuess === solution) {
      setIsCorrect(true);
    }
    setGuesses((prevGuesses) => {
      let newGuesses = [...prevGuesses];
      newGuesses[turn] = formattedGuess;
      return newGuesses;
    });
    setHistory((prevHistory) => {
      return [...prevHistory, currentGuess];
    });
    setTurn((prevTurn) => {
      return prevTurn + 1;
    });
    setUsedKeys((prevUsedKeys) => {
      let newKeys = { ...prevUsedKeys };

      formattedGuess.forEach((letter) => {
        const currentColor = newKeys[letter.key];

        if (letter.color === "green") {
          newKeys[letter.key] = "green";
          return;
        }
        if (letter.color === "yellow" && currentColor !== "green") {
          newKeys[letter.key] = "yellow";
          return;
        }
        if (
          letter.color === "grey" &&
          currentColor !== "green" &&
          currentColor !== "yellow"
        ) {
          newKeys[letter.key] = "grey";
          return;
        }
      });
      return newKeys;
    });
    setCurrentGuess("");
  };

  //handle keyup event & track current guess
  //if user pressess enter, add the new guess
  const handleKeyup = ({ key }) => {
    if (key == "Enter") {
      //only adds guess if turn is <5
      if (turn > 5) {
        console.log("you used all guesses");
        return;
      }
      //do not add duplicate
      if (history.includes(currentGuess)) {
        alert("you already tried that word");
        return;
      }
      //word should be 5letter long
      if (currentGuess.length !== 5) {
        alert("word must be 5 chars long");
        return;
      }
      const formatted = formatGuess();
      addNewGuess(formatted);
    }
    if (key === "Backspace") {
      setCurrentGuess((prev) => {
        return prev.slice(0, -1);
      });
      return;
    }
    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess((prev) => {
          return prev + key;
        });
      }
    }
  };

  return { turn, currentGuess, guesses, isCorrect, usedKeys, handleKeyup };
};
export default useWordle;
