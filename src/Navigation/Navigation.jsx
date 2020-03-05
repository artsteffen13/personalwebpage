import React, {useEffect, useState} from 'react';
import NavItem from "./NavItem";
import './navigation.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import AppsIcon from '@material-ui/icons/Apps';

const Navigation = (props) => {
    const [navClicked, setNavClicked] = useState({
        home: false,
        projects: false,
        github: false,
        contact: false
    });

    const endAnimation = document.querySelectorAll('.nav-link');

    useEffect(() => {
        Array.from(endAnimation).forEach(item =>{
            item.addEventListener('animationend', handleAnimationEnd);
        });
        // eslint-disable-next-line
    }, [navClicked]);

    const handleAnimationEnd = () => {
        setNavClicked({
            home: false,
            projects: false,
            github: false,
            contact: false
        });
        Array.from(endAnimation).forEach(item =>{
           item.removeEventListener('animationend', handleAnimationEnd);
        });
    };

    const navWasClicked = (e) => {
        const target = e.target.innerText;
        if (target === 'Home') {
            setNavClicked(prevItems => {
                return (
                    {...prevItems, home: true}
                )
            })
        } else if (target === 'Projects') {
            setNavClicked(prevItems => {
                return (
                    {...prevItems, projects: true}
                )
            })
        } else if (target === 'Github') {
            setNavClicked(prevItems => {
                return (
                    {...prevItems, github: true}
                )
            })
        } else if (target === 'Contact') {
            setNavClicked(prevItems => {
                return (
                    {...prevItems, contact: true}
                )
            })
        }
    };

    return (
        <div className="navigation">
            <span onClick={props.toggle} className="menu-icon">
                <AppsIcon style={{fontSize: 95}}/>
            </span>
            <NavItem
                navWasClicked={navWasClicked}
                class={navClicked.home ? "nav nav-link animated flash" : "nav nav-link"}
                link="/"
            >
                Home
            </NavItem>
            <NavItem
                navWasClicked={navWasClicked}
                class={navClicked.projects ? "nav nav-link animated flash" : "nav nav-link"}
                link="/projects"
            >
                Projects
            </NavItem>
            <NavItem
                navWasClicked={navWasClicked}
                class={navClicked.contact ? "nav nav-link animated flash" : "nav nav-link"}
                link="/contact"
            >
                Contact
            </NavItem>
            <span className="github-icon">
                <a rel="noopener noreferrer" href="https://github.com/artsteffen13" target="_blank">
                    <p className="github-logo">Github</p>
            <GitHubIcon style={{fontSize: 70}}/>
                </a>
            </span>
            <p className="copyright">&copy; Art Steffen {new Date().getFullYear()}</p>
        </div>
    );
};

export default Navigation;