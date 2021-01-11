import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Home.css'
import styled from 'styled-components'

const Contact = styled(Link)`
    text-decoration: none;
`;

const Music = styled(Link)`text-decoration: none;`;

const Organizations = styled(Link)`text-decoration: none;`;

const Hobbies = styled(Link)`text-decoration: none;`;

const Education = styled(Link)`text-decoration: none;`;

const AboutMe = styled(Link)`text-decoration: none;`;

export const Home = () => {
    return (
        <div className="home">
            
                <div className="grid">
                    <div id="face" className="grid-item">Face</div>
                    <Education to="aboutme/education" id="education" className="grid-item">Ed</Education>
                    <Organizations to="/aboutme/organizations" id="organizations" className="grid-item">Org</Organizations>
                    <AboutMe to="/aboutme/personalstatement" id="aboutme" className="grid-item">About Me</AboutMe>
                    <Music to="/music" id="music" className="grid-item">Music</Music>
                    <Hobbies to="/aboutme/hobbies" id="hobbies" className="grid-item">Hobbies</Hobbies>
                    <Contact to="/contact" id="contact" className="grid-item">Contact</Contact>
                    <div id="goals" className="grid-item">Goals</div>
                </div>
            
            

        </div>
    )
}