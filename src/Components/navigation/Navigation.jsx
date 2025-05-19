import { useState } from "react";
import { NavLink } from "react-router-dom";

import "./navigation.scss";

const Navigation = () => {
    const [menuState, setMenuState] = useState("hamburger");
    const [displayList, setDisplayList] = useState(false);
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
        setDisplayList((displayList) => !displayList);
    }
    return (
        <header className="header__links">
            <div onClick={handleMenuClick} className={`header__links_close-icon ${menuState}`}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div
                onClick={handleMenuClick}
                className={`mobile-menu-background ${displayList ? "" : "hide-wrapper"}`}
            ></div>
            <ul className={`header__links-list ${displayList ? "" : "hide-list"}`}>
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
