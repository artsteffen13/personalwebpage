import React from 'react';
import {NavLink} from "react-router-dom";

const NavItem = (props) => {

    return (
        <li onClick={props.navWasClicked} className={props.class}>
        <NavLink exact activeClassName="active" to={props.link}>
            {props.children}
        </NavLink>
        </li>
    );
};

export default NavItem;