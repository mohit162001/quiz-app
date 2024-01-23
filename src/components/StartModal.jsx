import React from "react";
import './Modal.css'
function StartModal({handleModal}) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h1>Start the Test</h1>
        <button className="modal-btn" onClick={handleModal}>Start</button>
      </div>
    </div>
  );
}

export default StartModal;
