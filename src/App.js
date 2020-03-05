import React, {useEffect, useState} from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from "./Home/Home";
import Navigation from "./Navigation/Navigation";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import ToggledMenu from "./Navigation/ToggledMenu";

function App() {
    const [menuToggle, setMenuToggle] = useState(false);
    const [animation, setAnimation] = useState(false);

    useEffect(() => {

    }, []);

    const animationFinished = () => {
        setMenuToggle(false);
        document.querySelector('.menu').removeEventListener('animationend', animationFinished);
    };

    const toggle = () => {
        if (menuToggle === true) {
            document.querySelector('.menu').addEventListener('animationend', animationFinished);
            setAnimation(false);
        } else {
            setAnimation(true);
            setMenuToggle(true);
        }
    };

    return (
        <>
            <nav style={{position: 'relative'}}>
                <Navigation
                toggle={toggle}
                />
            </nav>
            <ToggledMenu
            toggle={toggle}
            menuToggle={menuToggle}
            animation={animation}
            />
            <Switch>
                <Route path="/" exact><Home/></Route>
                <Route path="/projects"><Projects/></Route>
                <Route path="/contact"><Contact/></Route>
                <Route component={Home}/>
            </Switch>
        </>
    );
}

export default App;
