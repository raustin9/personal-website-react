import React , { useState } from 'react'
import { Link } from 'react-router-dom'
import './styles/Home.css'
import styled from 'styled-components'
import * as FaIcons from 'react-icons/fa'

const Contact = styled(Link)`
    text-decoration: none;
`;

const Music = styled(Link)`text-decoration: none;`;

const Organizations = styled(Link)`text-decoration: none;`;

const Hobbies = styled(Link)`text-decoration: none;`;

const Education = styled(Link)`text-decoration: none;`;

const AboutMe = styled(Link)`text-decoration: none;`;

const Github = styled.a`text-decoration: none;`;

const LinkedIn = styled.a`text-decoration: none;`;

export const Home = () => {
    return (
        <div className="home">
            
                <div className="grid">
                    <LinkedIn target="_blank" href="https://www.linkedin.com/in/ralexaustin9/" id="face" className="grid-item">
                        <FaIcons.FaLinkedin />
                    </LinkedIn>

                    <Education to="aboutme/education" id="education" className="grid-item">
                        <FaIcons.FaSchool />
                    </Education>

                    <Organizations to="/aboutme/organizations" id="organizations" className="grid-item">
                        <FaIcons.FaSitemap />
                    </Organizations>

                    <AboutMe to="/aboutme/personalstatement" id="aboutme" className="grid-item">
                        <FaIcons.FaUser />
                    </AboutMe>

                    <Music to="/music" id="music" className="grid-item">
                        <FaIcons.FaMusic />
                    </Music>

                    <Hobbies to="/aboutme/hobbies" id="hobbies" className="grid-item">
                        <FaIcons.FaPencilRuler />
                    </Hobbies>

                    <Contact to="/contact" id="contact" className="grid-item">
                        <FaIcons.FaEnvelope />
                    </Contact>

                    <Github target="_blank" href="https://github.com/raustin9" id="thissite" className="grid-item">
                        <FaIcons.FaGithub />
                    </Github>
                </div>
            
            

        </div>
    )
}