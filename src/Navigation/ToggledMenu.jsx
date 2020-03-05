import React from 'react';
import NavItem from "./NavItem";

const ToggledMenu = (props) => {
    return (
        <div
            onClick={props.toggle}
            style={{display: props.menuToggle ? 'inherit' : 'none'}}
            className={props.animation ? 'menu animated fadeIn' : 'menu animated fadeOut'}>
            <NavItem
                class="nav-link"
                link="/"
            >
                Home
            </NavItem>
            <NavItem
                class="nav-link"
                link="/projects"
            >
                Projects
            </NavItem>
            <NavItem
                class="nav-link"
                link="/contact"
            >
                Contact
            </NavItem>
        </div>
    );
};

export default ToggledMenu;