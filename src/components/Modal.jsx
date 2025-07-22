import React from "react";

function Modal({ isCorrect, turn, solution }) {
  const restartGame = () => {
    location.reload();
  };
  return (
    <div className="modal">
      {isCorrect && (
        <div>
          <h1>You Win</h1>
          <p>
            Solution: <span className="solution"> {solution}</span>
          </p>
          <p>You found the solution in {turn} guesses :)</p>
          <button onClick={restartGame} className="btn">play again</button>
        </div>
      )}
      {!isCorrect && (
        <div>
          <h1>Never Mind!</h1>
          <p className="solution"> Solution: {solution}</p>
          <p>Better luck next time :)</p>
          <button onClick={restartGame} className="btn">play again</button>
        </div>
      )}
    </div>
  );
}

export default Modal;
