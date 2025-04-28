import "./playerField.sass";

const PlayerField = ({ playerMark, player, score, winner, activePlayer }) => {
    const displayMark = activePlayer ? "show-mark" : "hide-mark";
    const displayWinner = winner ? "show" : "hide";

    return (
        <>
            <div className={`ticTacToe__winner-block ${displayWinner}`}>WIN</div>
            <div className="ticTacToe__player_data">
                <div
                    className={`ticTacToe__player_sign ${playerMark === "x" ? "sign-x" : "sign-o"}`}
                ></div>
                <div className="ticTacToe__player_name">{player}:</div>
                <div className="ticTacToe__player_score">{score}</div>
            </div>
            <div className="ticTacToe__active-player-mark-field">
                <div className={`ticTacToe__active-player-mark ${displayMark}`}></div>
            </div>
        </>
    );
};

export default PlayerField;
