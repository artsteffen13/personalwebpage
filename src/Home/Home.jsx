import React from 'react';
import './home.css';
import myPic from '../images/me-min.jpeg';

const Home = () => {
    return (
        <div className="home animated fadeIn">
            <img alt="me" className="my-pic" src={myPic}/>
            <h1>Hi, my name is Art Steffen</h1>
            <h2>I am a JavaScript developer specializing in React</h2>
            <p className="bottom-margin"><em>My passion is to create and design web pages and applications.<br/>
                What can I build for you today?</em></p>
        </div>
    );
};

export default Home;