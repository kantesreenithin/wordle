import React, { useState } from "react";
import WordleInstructionsModal from "./WordleInstructionsModal";

function InstructionModal() {
  const [showInstructions, setShowInstructions] = useState(false);
  return (
    <div>
      <button onClick={() => setShowInstructions(true)} className="btn">
        Show Intructions
      </button>
      <WordleInstructionsModal
        isOpen={showInstructions}
        onClose={() => setShowInstructions(false)}
      />
    </div>
  );
}

export default InstructionModal;
