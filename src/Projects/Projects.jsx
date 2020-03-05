import React from 'react';
import daymark from '../images/daymark-min.jpeg';
import monalisia from '../images/monalisia-min.jpeg';
import keeper from '../images/keeper-min.jpeg';
import kidsRiddles from '../images/kidsriddles-min.jpeg';
import newsletter from '../images/newsletter.PNG'
import './projects.css';

const Projects = () => {
    return (
        <div className="projects animated fadeIn">
            <span className="projects-spacing">
                    <a rel="noopener noreferrer" href="https://monalisia.web.app" target="_blank">
                            <img alt="monalisia" src={monalisia}/>
                    </a>
            </span>
            <span className="projects-spacing">
                    <a rel="noopener noreferrer" href="https://daymark-1579288703772.web.app/" target="_blank">
                            <img alt="daymark" src={daymark}/>
                    </a>
            </span>
            <span className="projects-spacing">
                    <a rel="noopener noreferrer" href="https://artsnotes.herokuapp.com/" target="_blank">
                            <img alt="keeper" src={keeper}/>
                    </a>
            </span>
            <span className="projects-spacing">
                    <a rel="noopener noreferrer" href="https://kidsriddles.herokuapp.com/" target="_blank">
                            <img alt="kidsriddles" src={kidsRiddles}/>
                    </a>
            </span>
            <span className="projects-spacing">
                    <a rel="noopener noreferrer" href="https://artsnewsletter.herokuapp.com/" target="_blank">
                            <img alt="newsletter" src={newsletter}/>
                    </a>
            </span>
        </div>
    );
};

export default Projects;