import { useState } from "react";

import "./gameCard.scss";

const GameCard = ({ cardId, cardTurnHandler, color, isTurned }) => {
    // const [action, setAction] = useState(isTurned);

    function handleTurn() {
        // setAction(true);
        cardTurnHandler(cardId, color);
    }
    return (
        <div onClick={handleTurn} className={`game-card ${isTurned ? "turn" : null}`}>
            <div className="front-side"></div>
            <div className="back-side" style={{ backgroundColor: color }}></div>
        </div>
    );
};

export default GameCard;
