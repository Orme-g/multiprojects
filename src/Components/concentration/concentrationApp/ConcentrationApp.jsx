import { useState } from "react";

import GameCard from "../gameCard/GameCard";
import { cardsData, shuffleCards } from "../data/data";
import "./concentrationApp.scss";

const ConcentrationApp = () => {
    const [cards, setCards] = useState(() => shuffleCards(cardsData));
    const [turnedCardsIds, setTurnedCardsIds] = useState([]);
    const [turnedCardColor, setTurnedCardColor] = useState([]);
    const [turns, setTurns] = useState(0);
    function restartGame() {
        console.log(shuffleCards(cardsData));
        setTurns(0);

        setTurnedCardColor([]);
        setTurnedCardsIds([]);
    }
    const cardTurnHandler = (cardId, color) => {
        let cardsCopy = [...cards];
        if (!turnedCardsIds.includes(cardId)) {
            cardsCopy.forEach((item) => {
                if (item.id === cardId) {
                    item.isTurned = !item.isTurned;
                }
            });
            setTurns((turns) => turns + 1);
            setTurnedCardsIds([...turnedCardsIds, cardId]);
            setTurnedCardColor([...turnedCardColor, color]);
            if (turns === 2) {
                if (turnedCardColor[0] === turnedCardColor[1]) {
                    cardsCopy.forEach((item) => {
                        if (item.id === turnedCardsIds[0] || item.id === turnedCardsIds[1]) {
                            item.isFinished = true;
                        }
                    });
                    setTurns(1);
                    setTurnedCardsIds([cardId]);
                    setTurnedCardColor([color]);
                } else {
                    cardsCopy.forEach((item) => {
                        if (item.id === turnedCardsIds[0] || item.id === turnedCardsIds[1]) {
                            item.isTurned = !item.isTurned;
                        }
                    });
                    setTurns(1);
                    setTurnedCardsIds([cardId]);
                    setTurnedCardColor([color]);
                }
            }
        }
        setCards(cardsCopy);
    };
    const renderCards = cards.map(({ id, color, isTurned, isFinished }) => (
        <GameCard
            key={id}
            cardId={id}
            cardTurnHandler={cardTurnHandler}
            color={color}
            isTurned={isTurned}
            isFinished={isFinished}
        />
    ));
    return (
        <div className="concentration-app">
            <button onClick={restartGame}>Restart</button>
            <div className="game-field">{renderCards}</div>
        </div>
    );
};

export default ConcentrationApp;
