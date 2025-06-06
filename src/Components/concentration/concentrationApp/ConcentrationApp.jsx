import { useState, useRef, useEffect } from "react";

import GameCard from "../gameCard/GameCard";
import { cardsData, shuffleCards } from "../data/data";
import Button from "../../UI/Button/Button";
import ModalNotice from "../modalNotice/ModalNotice";
import "./concentrationApp.scss";
const ConcentrationApp = () => {
    const [cards, setCards] = useState([]);
    const [turnedCardsIds, setTurnedCardsIds] = useState([]);
    const [turnedCardName, setTurnedCardName] = useState([]);
    const [turns, setTurns] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [action, setAction] = useState(null);
    const [pairsFound, setPairsFound] = useState(0);
    const [gameFinished, setGameFinished] = useState(false);
    const [isGameStarted, setGameStarted] = useState(false);
    const [small, setSmall] = useState(false);
    const [displayGameField, setDisplayGameField] = useState("hide-game");
    useEffect(() => {
        if (turnedCardName.length === 2 && turnedCardName[0] === turnedCardName[1]) {
            const cardsCopy = [...cards];
            cardsCopy.forEach((item) => {
                if (item.id === turnedCardsIds[0] || item.id === turnedCardsIds[1]) {
                    item.isFinished = true;
                }
                setTurns(0);
                setTurnedCardsIds([]);
                setTurnedCardName([]);
            });
            setPairsFound((pairsFound) => pairsFound + 1);
        }
    }, [turnedCardName]);
    useEffect(() => {
        if (pairsFound === cards.length / 2 && cards.length > 0) {
            setGameFinished(true);
        }
    }, [pairsFound]);

    function resetState() {
        setTurns(0);
        setPairsFound(0);
        setTurnedCardName([]);
        setTurnedCardsIds([]);
        setIsModalOpen(false);
        setGameFinished(false);
    }
    function modalController() {
        setIsModalOpen((isModalOpen) => !isModalOpen);
    }
    function handleButtonClick(action, ...args) {
        if ((turnedCardsIds.length < 1 && pairsFound < 1) || gameFinished) {
            action(...args);
            return;
        }
        setAction(() => () => action(...args));
        setIsModalOpen(true);
    }
    function gameStarter() {
        if (isGameStarted) {
            return;
        }
        setDisplayGameField("show-game");
        setSmall((small) => !small);
        setGameStarted(true);
    }
    function playGame(cardsArray, cardsNumber) {
        gameStarter();
        const playCards = cardsArray.slice(0, cardsNumber);
        setCards(shuffleCards(playCards));
        resetState();
    }
    function restartGame() {
        if (turnedCardsIds.length < 1 && pairsFound === 0) {
            return;
        }
        const cardsCopy = [...cards];
        cardsCopy.forEach((item) => {
            item.isFinished = false;
            item.isTurned = false;
        });
        setTimeout(() => {
            setCards(shuffleCards(cardsCopy));
        }, 500);
        resetState();
    }
    const cardTurnHandler = (cardId, name) => {
        const cardsCopy = [...cards];
        if (!turnedCardsIds.includes(cardId)) {
            cardsCopy.forEach((item) => {
                if (item.id === cardId) {
                    item.isTurned = !item.isTurned;
                }
            });
            setTurns((turns) => turns + 1);
            setTurnedCardsIds([...turnedCardsIds, cardId]);
            setTurnedCardName([...turnedCardName, name]);
            if (turns === 2) {
                cardsCopy.forEach((item) => {
                    if (item.id === turnedCardsIds[0] || item.id === turnedCardsIds[1]) {
                        item.isTurned = !item.isTurned;
                    }
                });
                setTurns(1);
                setTurnedCardsIds([cardId]);
                setTurnedCardName([name]);
            }
        }
        setCards(cardsCopy);
    };
    const renderCards = cards.map(({ id, name, isTurned, isFinished, image }) => (
        <GameCard
            key={id}
            cardId={id}
            cardTurnHandler={cardTurnHandler}
            name={name}
            isTurned={isTurned}
            isFinished={isFinished}
            image={image}
            gameFinished={gameFinished}
        />
    ));

    return (
        <div className="concentration-app">
            <div className={`buttons ${small ? "buttons-small" : ""}`}>
                <Button onClick={() => handleButtonClick(playGame, cardsData, 10)}>
                    Play 10 Cards
                </Button>
                <Button onClick={() => handleButtonClick(playGame, cardsData, 20)}>
                    Play 20 Cards
                </Button>
                <Button onClick={() => handleButtonClick(restartGame)}>Restart</Button>
            </div>

            <div className={`game-field ${displayGameField}`}>{renderCards}</div>
            <ModalNotice
                action={action}
                modalController={modalController}
                isModalOpen={isModalOpen}
            >
                Прогресс будет утерян. Начать заново?
            </ModalNotice>
        </div>
    );
};

export default ConcentrationApp;
