import { useState } from "react";
import { NavLink } from "react-router-dom";

import "./navigation.scss";

const Navigation = () => {
    const [menuState, setMenuState] = useState("hamburger");
    const [displayList, setDisplayList] = useState("hide-list");
    function handleMenuClick() {
        if (menuState === "hamburger") {
            setMenuState("close");
            toggleDisplayMenuList();
        } else {
            setMenuState("hamburger");
            toggleDisplayMenuList();
        }
    }
    function toggleDisplayMenuList() {
        if (displayList === "hide-list") {
            setDisplayList("");
        } else {
            setDisplayList("hide-list");
        }
    }
    return (
        <header className="header__links">
            <div onClick={handleMenuClick} className={`header__links_close-icon ${menuState}`}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={`header__links-list ${displayList}`}>
                <li className="header__links-item">
                    <NavLink to="/">Main Page</NavLink>
                </li>
                <li className="header__links-item">
                    <NavLink to="/tic-tac-toe">Tic Tac Toe</NavLink>
                </li>
                <li className="header__links-item">
                    <NavLink to="/concentration">Concentration</NavLink>
                </li>
            </ul>
        </header>
    );
};

export default Navigation;
