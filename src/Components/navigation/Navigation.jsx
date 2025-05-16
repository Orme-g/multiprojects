import { NavLink } from "react-router-dom";

import "./navigation.scss";

const Navigation = () => {
    return (
        <header className="header__links">
            <ul className="header__links-list">
                <li className="header__links-item">
                    <NavLink to="/">Main Page</NavLink>
                </li>
                <li className="header__links-item">
                    <NavLink to="/tic-tac-toe">Tic Tac Toe</NavLink>
                </li>
                <li className="header__links-item">
                    <NavLink to="/concentration">Concentration</NavLink>
                </li>
                {/* <li className="header__links-item">
                    <NavLink to="#">Link somwhere</NavLink>
                </li> */}
                {/* <li className="header__links-item">
                    <NavLink to="#">Link somwhere</NavLink>
                </li> */}
            </ul>
        </header>
    );
};

export default Navigation;
