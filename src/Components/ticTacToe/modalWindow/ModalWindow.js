import { useState, useEffect, useRef, memo } from "react";

import "./modalWindow.sass";

const ModalWindow = memo(({ setFirst, setSecond, modalController }) => {
    const [player1, setPlayer1] = useState("");
    const [player2, setPlayer2] = useState("");
    const [error, setError] = useState(null);
    const firstInputRef = useRef(null);
    const secondInputRef = useRef(null);
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "unset";
        };
    }, []);

    function validateNames() {
        if (!player1) {
            setError("Заполните имя первого игрока");
            firstInputRef.current.focus();
            return false;
        }
        if (player1.length > 10) {
            setError("Максимум 10 символов");
            firstInputRef.current.focus();
            return false;
        }
        if (!player2) {
            setError("Заполните имя второго игрока");
            secondInputRef.current.focus();
            return false;
        }
        if (player1 === player2) {
            setError("Имена должны отличаться");
            firstInputRef.current.focus();
            return false;
        }

        if (player2.length > 10) {
            setError("Максимум 10 символов");
            secondInputRef.current.focus();
            return false;
        }
        return true;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateNames()) {
            return;
        }
        setFirst(player1);
        setSecond(player2);
        modalController();
    };

    return (
        <div className="ticTacToe__modal">
            <div className="ticTacToe__modal_dialog">
                <div className="ticTacToe__modal_header">
                    <div className="ticTacToe__modal_close" onClick={modalController}>
                        ×
                    </div>
                </div>
                <div className="ticTacToe__modal_title">Enter player names:</div>
                <form action="submit">
                    <div className="ticTacToe__modal_input-wrapper">
                        <input
                            autoComplete="off"
                            name="player_1"
                            ref={firstInputRef}
                            value={player1}
                            className="ticTacToe__modal_name-input"
                            type="text"
                            placeholder="PLAYER_1"
                            onChange={(e) => setPlayer1(e.target.value)}
                        />
                        <div className="ticTacToe__modal_player-sign">
                            <div>×</div>×
                        </div>
                    </div>
                    <div className="ticTacToe__modal_input-wrapper">
                        <input
                            autoComplete="off"
                            name="player_2"
                            ref={secondInputRef}
                            value={player2}
                            className="ticTacToe__modal_name-input"
                            type="text"
                            placeholder="PLAYER_2"
                            onChange={(e) => setPlayer2(e.target.value)}
                        />
                        <div className="ticTacToe__modal_player-sign">
                            <div>o</div>
                        </div>
                    </div>
                    <div className="ticTacToe__modal_error-field">{error}</div>
                    <div className="ticTacToe__modal_button-submit_background">
                        <button
                            className="ticTacToe__modal_button-submit"
                            type="submit"
                            onClick={(e) => handleSubmit(e)}
                        >
                            SUBMIT
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
});

export default ModalWindow;
