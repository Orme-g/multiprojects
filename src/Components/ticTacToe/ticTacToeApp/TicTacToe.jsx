import { useState, useEffect, useRef } from "react";

import Button from "../../UI/Button/Button";
import PlayerField from "../playerScore/PlayerField";
import ModalWindow from "../modalWindow/ModalWindow";
import "./ticTacToe.sass";

const TicTacToe = () => {
    const initialField = {
        a1: null,
        a2: null,
        a3: null,
        b1: null,
        b2: null,
        b3: null,
        c1: null,
        c2: null,
        c3: null,
    };
    const [firstPlayerName, setFirstPlayerName] = useState("Player_1");
    const [secondPlayerName, setSecondPlayerName] = useState("Player_2");
    const [firstPlayerScore, setFirstPlayerScore] = useState(0);
    const [secondPlayerScore, setSecondPlayerScore] = useState(0);
    const [activePlayer, setActivePlayer] = useState("x");
    const [winner, setWinner] = useState(null);
    const [disabledFields, setDisabledFields] = useState([]);
    const [fieldsChecked, setFieldChecked] = useState(initialField);
    const [gameFinished, setGameFinished] = useState(false);
    const [modalState, setModalState] = useState(true);
    const [winnerPattern, setWinnerPattern] = useState(null);
    const [lastWinner, setLastWinner] = useState("x");
    const prevPlayer = useRef(firstPlayerName);

    useEffect(() => {
        checkWinner();
        // eslint-disable-next-line
    }, [prevPlayer.current]);

    const fields = ["a1", "a2", "a3", "b1", "b2", "b3", "c1", "c2", "c3"];
    const drawTable = fields.map((item) => {
        return (
            <div
                key={item}
                data-field={item}
                className={`ticTacToe__field_item`}
                onClick={(e) => handleField(e)}
            ></div>
        );
    });

    function toggleActivePlayer() {
        prevPlayer.current = activePlayer;
        if (activePlayer === "x") {
            setActivePlayer("o");
        } else {
            setActivePlayer("x");
        }
    }

    function modalController() {
        setModalState((modalState) => !modalState);
    }
    function resetScores() {
        setFirstPlayerScore(0);
        setSecondPlayerScore(0);
    }

    function resetFields() {
        const fields = document.querySelectorAll(".ticTacToe__field_item");
        fields.forEach((item) => {
            item.classList = "ticTacToe__field_item";
        });
        setFieldChecked(initialField);
        setDisabledFields([]);
        setActivePlayer(prevPlayer.current);
        setActivePlayer(lastWinner);
        setGameFinished(false);
        setWinner(null);
        setWinnerPattern(null);
    }

    function handleField(e) {
        if (!disabledFields.includes(e.target.dataset.field) && !gameFinished) {
            setDisabledFields([...disabledFields, e.target.dataset.field]);
            setFieldChecked((fieldsChecked) => ({
                ...fieldsChecked,
                [e.target.dataset.field]: activePlayer,
            }));
            e.target.className += ` ${activePlayer}-player`;
            toggleActivePlayer();
        }
    }

    function checkWinner() {
        const { a1, a2, a3, b1, b2, b3, c1, c2, c3 } = fieldsChecked;
        if (a1 + a2 + a3 === "xxx" || a1 + a2 + a3 === "ooo") {
            handleVictory("a1a2a3");
        }
        if (b1 + b2 + b3 === "xxx" || b1 + b2 + b3 === "ooo") {
            handleVictory("b1b2b3");
        }
        if (c1 + c2 + c3 === "xxx" || c1 + c2 + c3 === "ooo") {
            handleVictory("c1c2c3");
        }
        if (a1 + b1 + c1 === "xxx" || a1 + b1 + c1 === "ooo") {
            handleVictory("a1b1c1");
        }
        if (a2 + b2 + c2 === "xxx" || a2 + b2 + c2 === "ooo") {
            handleVictory("a2b2c2");
        }
        if (a3 + b3 + c3 === "xxx" || a3 + b3 + c3 === "ooo") {
            handleVictory("a3b3c3");
        }
        if (a1 + b2 + c3 === "xxx" || a1 + b2 + c3 === "ooo") {
            handleVictory("a1b2c3");
        }
        if (a3 + b2 + c1 === "xxx" || a3 + b2 + c1 === "ooo") {
            handleVictory("a3b2c1");
        }
    }
    function handleVictory(winnerPattern) {
        if (prevPlayer.current === "x") {
            setFirstPlayerScore((firstPlayerScore) => firstPlayerScore + 1);
            setWinner("x");
            setLastWinner("x");
            setActivePlayer(null);
        } else if (prevPlayer.current === "o") {
            setSecondPlayerScore((secondPlayerScore) => secondPlayerScore + 1);
            setWinner("o");
            setLastWinner("o");
            setActivePlayer(null);
        }
        setWinnerPattern(winnerPattern);
        setGameFinished(true);
    }

    return (
        <div className="ticTacToe">
            {modalState ? (
                <ModalWindow
                    modalController={modalController}
                    modalState={modalState}
                    setFirst={setFirstPlayerName}
                    setSecond={setSecondPlayerName}
                />
            ) : null}
            <div className="ticTacToe__header">
                <div className="ticTacToe__player player_1">
                    <PlayerField
                        playerMark={"x"}
                        player={firstPlayerName}
                        score={firstPlayerScore}
                        winner={winner === "x" ? true : false}
                        activePlayer={activePlayer === "x"}
                    />
                </div>
                <div className="ticTacToe__restart_field">
                    <div className="ticTacToe__restart_button_background">
                        <button className="ticTacToe__restart_button" onClick={() => resetFields()}>
                            Restart
                        </button>
                    </div>
                </div>
                <div className="ticTacToe__player player_2">
                    <PlayerField
                        playerMark={"o"}
                        player={secondPlayerName}
                        score={secondPlayerScore}
                        winner={winner === "o" ? true : false}
                        activePlayer={activePlayer === "o"}
                    />
                </div>
            </div>
            <div className="ticTacToe__field">
                <div
                    className={`ticTacToe__field_crossline ${
                        winnerPattern ? winnerPattern + " show-line" : "hide-line"
                    } `}
                ></div>
                {drawTable}
            </div>
            <div className="ticTacToe__buttons-block">
                <Button onClick={modalController}>Change names</Button>
                <Button onClick={resetScores}>Reset score</Button>
            </div>
        </div>
    );
};

export default TicTacToe;
