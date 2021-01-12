import { Link } from 'react-router-dom'
import './styles/Home.css'
import styled from 'styled-components'
import * as FaIcons from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'

const Contact = styled(Link)`
    text-decoration: none;
`;

const Text = styled.p`
    
    font-size: 1.8rem;
    color: #355070;
    
    @media screen and (min-width: 960px) {
        font-size: 2.3rem;
    }
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
                    <LinkedIn rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/ralexaustin9/" id="face" className="grid-item linkedin">
                        <IconContext.Provider value={{ className: 'Icon linkedin' }}>
                            <FaIcons.FaLinkedin />
                        </IconContext.Provider>
                    </LinkedIn>

                    <Education to="aboutme/education" id="education" className="grid-item">
                        <IconContext.Provider value={{ className: 'Icon' }}>
                            <FaIcons.FaSchool />
                        </IconContext.Provider>
                        <Text>Education</Text>
                    </Education>

                    <Organizations to="/aboutme/organizations" id="organizations" className="grid-item">
                        <IconContext.Provider value={{ className: 'Icon' }}>
                            <FaIcons.FaSitemap />
                        </IconContext.Provider>
                        <Text>Organizations</Text>
                    </Organizations>

                    <AboutMe to="/aboutme/personalstatement" id="aboutme" className="grid-item">
                        <IconContext.Provider value={{ className: 'Icon' }}>
                            <FaIcons.FaUser />
                        </IconContext.Provider>
                        <Text>About Me</Text>
                    </AboutMe>

                    <Music to="/music" id="music" className="grid-item">
                        <IconContext.Provider value={{ className: 'Icon' }}>
                            <FaIcons.FaMusic />
                        </IconContext.Provider>

                        <Text>Music</Text>
                    </Music>

                    <Hobbies to="/aboutme/hobbies" id="hobbies" className="grid-item">
                        <IconContext.Provider value={{ className: 'Icon' }}>
                            <FaIcons.FaPencilRuler />
                        </IconContext.Provider>
                    
                        <Text>Hobbies</Text>
                    </Hobbies>

                    <Contact to="/contact" id="contact" className="grid-item">
                        <IconContext.Provider value={{ className: 'Icon' }}>
                            <FaIcons.FaEnvelope />
                        </IconContext.Provider>
        
                        <Text>Contact</Text>
                    </Contact>

                    <Github rel="noreferrer" target="_blank" href="https://github.com/raustin9" id="thissite" className="grid-item github">
                        <IconContext.Provider value={{ className: 'Icon github' }}>
                            <FaIcons.FaGithub />
                        </IconContext.Provider>
                    </Github>
                </div>
        </div>
    )
}