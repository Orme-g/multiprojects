import { useState, useEffect } from "react";

import GameCard from "../gameCard/GameCard";
import { cardsData, shuffleCards } from "../data/data";
import "./concentrationApp.scss";

const ConcentrationApp = () => {
    console.log("Parent rendered");
    const [cards, setCards] = useState(() => shuffleCards(cardsData));
    const [turnedCardsData, setTurnedCardsData] = useState([]);
    const [turnedCardsIds, setTurnedCardsIds] = useState([]);
    const [turns, setTurns] = useState(0);
    function cardTurnHandler(cardId, color) {
        let cardsCopy = [...cards];
        if (!turnedCardsIds.includes(cardId) && turns <= 2) {
            setTurnedCardsData((turnedCardsData) => [...turnedCardsData, [cardId, color]]);
            setTurns((turns) => turns + 1);
            setTurnedCardsIds([...turnedCardsIds, cardId]);
            cardsCopy.forEach((item) => {
                if (item.id === cardId) {
                    item.isTurned = !item.isTurned;
                }
            });
            setCards(cardsCopy);
            if (turns === 2) {
                cardsCopy.forEach((item) => {
                    if (item.id === turnedCardsIds[0] || item.id === turnedCardsIds[1]) {
                        item.isTurned = false;
                    }
                });
                setTurns(1);
            }
        }
    }
    const renderCards = cards.map(({ id, color, isTurned }) => (
        <GameCard
            key={id}
            cardId={id}
            cardTurnHandler={cardTurnHandler}
            color={color}
            isTurned={isTurned}
        />
    ));
    return (
        <div className="concentration-app">
            <div className="game-field">{renderCards}</div>
        </div>
    );
};

export default ConcentrationApp;
