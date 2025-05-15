import "./gameCard.scss";

const GameCard = ({ cardId, cardTurnHandler, name, isTurned, isFinished, image, gameFinished }) => {
    function handleTurn() {
        if (isFinished) {
            return;
        }
        cardTurnHandler(cardId, name);
    }
    return (
        <div
            onClick={handleTurn}
            className={`game-card ${isTurned ? "turn" : ""} ${isFinished ? "pair-found" : ""} ${gameFinished ? 'game-finished' : ''}`}
        >
            <div className="front-side"></div>
            <div className="back-side">
                <img src={image} alt="card_image" />
            </div>
        </div>
    );
};

export default GameCard;
