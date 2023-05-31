import React, { useState } from "react";
import "./Card.css";

function Card({ front, backContent, handleButtonClick }) {
  const [isFlipped, setIsFlipped] = useState(false);

  function handleClick() {
    if (!isFlipped) {
      setIsFlipped(true);
      handleButtonClick();
    }
    //add code here
  }

  return (
    <div
      className={`card ${isFlipped ? "flipped" : ""} ${
        isFlipped ? "disabled" : ""
      }`}
      onClick={handleClick}
    >
      <div className="card_front">
        <div className="card_dollar-value">{front}</div>
      </div>
      <div className="card_back">{backContent}</div>
    </div>
  );
}

export default Card;
