import React from "react";

function WordleInstructionsModal({ isOpen, onClose }) {
  if (!isOpen) return null;
  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h2>How to Play Wordle</h2>
        <p>Guess the 5-letter word in 6 tries or less!</p>

        <p>
          Type a 5-letter word and press <strong>Enter</strong>.<br></br>
          Each letter gives feedback:
        </p>

        <div>
          <span className="box green">A</span> Green = correct letter, correct
          place. <br /><br />
          <span className="box yellow">B</span> Yellow = correct letter, wrong
          place. <br /><br />
          <span className="box gray">C</span> Gray = letter not in the word.
        </div>

        <h3>Tips</h3>
        <ul>
          <li>Guesses must be valid 5-letter words.</li>
          <li>Do not repeat the words</li>
          <li>
            Letters may appear more than once (e.g:sassy).
          </li>
          <li>Start with common letters or vowels.</li>
        </ul>

        <div className="footer">
          <span>Win: guess the word in 6 tries.</span>
          <span>Lose: run out of tries.</span>
        </div>
        <br/>
        <button className="btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default WordleInstructionsModal;
