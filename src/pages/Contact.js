import React from 'react'
import styled from 'styled-components'
import * as FaIcons from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import './styles/Contact.css'

const Container = styled.div`
    background-color:  rgba(53 , 80 , 112 , 0.5);
    border-radius: 10px;
    height: 500px;
    width: 100%;
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 30px;
    display: grid;
    grid-template-rows: repeat(5 , 100px);
    grid-template-columns: repeat(3 , 33.3333333%);
    align-self: start;
    
`;

const Header = styled.div`
    border-radius: 10px;
    width: 100%;
    display: flex;
    opacity: 1;
    background-color: #255286;
    height: 70px;
    grid-row: 1 / span 1;
    grid-column: 1 / span 3;
    align-items: center;
    justify-content: center;
    
`;

const Email = styled.div`
    display: flex;
    align-items: center;
    margin-left: 10px;
    
    height: 90px;
    border-right: 2px solid #fff;
    grid-column: 1 / span 1;
    grid-row: 2 / span 1;
    background-image: linear-gradient(90deg , #355070 80% , #3E5B7D);
`;

const Phone = styled.div`
    display: flex;
    
    margin-left: 10px;
    align-items: center;
    height: 90px;
    border-right: 2px solid #fff;
    grid-column: 1 / span 1;
    grid-row: 3 / span 1;
    background-image: linear-gradient(90deg , #355070 80% , #3E5B7D);
`;

const Linkedin = styled.div`
    display: flex;
    margin-left: 10px;
    align-items: center;
    height: 90px;
    border-right: 2px solid #fff;
    grid-column: 1 / span 1;
    grid-row: 4 / span 1;
    background-image: linear-gradient(90deg , #355070 80% , #3E5B7D);
`;

const Github = styled.div`
    display: flex;
    margin-left: 10px;
    align-items: center;
    height: 90px;
    border-right: 2px solid #fff;
    grid-column: 1 / span 1;
    grid-row: 5 / span 1;
    background-image: linear-gradient(90deg , #355070 80% , #3E5B7D);
`;

const Einfo = styled.div`
    margin-right: 10px;
    display: flex;
    align-items: center;
    height: 90px;
    grid-column: 2 / span 2;
    grid-row: 2 / span 1;
    background-image: linear-gradient(-90deg , #355070 80% , #3E5B7D);
`;

const Pinfo = styled.div`
    display: flex;
    margin-right: 10px;
    align-items: center;
    height: 90px;
    grid-column: 2 / span 2;
    grid-row: 3 / span 1;
    background-image: linear-gradient(-90deg , #355070 80% , #3E5B7D);
`;

const Linfo = styled.div`
    display: flex;
    align-items: center;
    margin-right: 10px;
    height: 90px;
    grid-column: 2 / span 2;
    grid-row: 4 / span 1;
    background-image: linear-gradient(-90deg , #355070 80% , #3E5B7D);
`;

const Ginfo = styled.div`
    display: flex;
    align-items: center;
    margin-right: 10px;
    height: 90px;
    grid-column: 2 / span 2;
    grid-row: 5 / span 1;
    background-image: linear-gradient(-90deg , #355070 80% , #3E5B7D);
`;

const Text = styled.p`
    color: #fff;
    font-size: 1.8rem;
    margin-left: 5%;
    font-family: "Monaco", monospace;
`;

const HeadText = styled.p`
    color: #fff;
    font-size: 2.6rem;
    font-weight: bold;
    font-family: "Monaco", monospace;
`;

const Links = styled.a`
    color: #fff;
    font-size: 1.3rem;
    margin-left: 3%;
    font-family: "Monaco", monospace;
    text-decoration: none;

    &:hover {
        cursor: pointer;
    }

    @media screen and (min-width: 960px) {
        font-size: 1.8rem;
    }
`;

export const Contact = () => {
    return (
        <div className='contact'>
            
            
            <Container>
                <Header>
                    <HeadText>
                        Contact Information
                    </HeadText>
                </Header>

                <Email>
                    <Text>
                        Email:
                    </Text>
                </Email>

                <Phone>
                    <Text>
                        Phone Number:
                    </Text>
                </Phone>

                <Linkedin>
                    <Text>
                        LinkedIn:
                    </Text>
                </Linkedin>
                <Github>
                    <Text>
                        Github:
                    </Text>
                </Github>

                <Einfo>
                    <Text>
                        raustin9@vols.utk.edu
                    </Text>
                </Einfo>

                <Pinfo>
                    <Text>
                        (865)898-3123
                    </Text>
                </Pinfo>

                <Linfo>
                    <IconContext.Provider value={{ className: 'Linkedin'}}>
                        <FaIcons.FaLinkedin />
                    </IconContext.Provider>
                    <Links rel="noreferrer" target="none" href="https://www.linkedin.com/in/ralexaustin9/">
                        https://www.linkedin.com/in/ralexaustin9/
                    </Links>
                </Linfo>

                <Ginfo>
                    <IconContext.Provider value={{ className: 'GithubIcon'}}>
                        <FaIcons.FaGithubSquare />
                    </IconContext.Provider>
                    <Links rel="noreferrer" target="none" href="https://github.com/raustin9">
                        https://github.com/raustin9
                    </Links>
                </Ginfo>
            </Container>

        </div>
    )
}