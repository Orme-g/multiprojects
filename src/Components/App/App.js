import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Components
import Navigation from "../navigation/Navigation";
import MainPage from "../mainPage/MainPage";
import TicTacToe from "../ticTacToe/ticTacToeApp/TicTacToe";

import "./App.css";

export const App = () => {
    return (
        <Router>
            <div className="App">
                <Navigation />
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/tic-tac-toe" element={<TicTacToe />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
