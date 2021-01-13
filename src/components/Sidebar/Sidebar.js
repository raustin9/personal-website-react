import React, { useState } from 'react'
import styled from "styled-components"
import { Link } from "react-router-dom"
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import {SidebarData} from './SidebarData'
import SubMenu from './Submenu'
import { IconContext } from 'react-icons/lib'

import './Sidebar.css'

const Socials = styled.div`
    font-size: 2.5rem;
    margin-left: auto;
    margin-right: 2rem;
    justify-self: end;
    height: 80px;
    display:flex;
    align-items: center;
    justify-content: center;
    column-gap: 1.5rem;
`;

const Nav = styled.div`
    background: #15171c;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

const NavIcon = styled(Link)`
    margin-left: 2rem;
    font-size: 2rem;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const SidebarNav = styled.nav`
    background: #15171c;
    width: 250px;
    height:100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
    transition: all 0.35s ease-out;
    z-index: 10;
`;

const SidebarWrap = styled.div`
    width: 100%;
`;

const HomeButton = styled(Link)`
    justify-self: start;
    margin: auto;
    margin-left: 20px;
    font-size: 2.5rem;
`;

const Sidebar = () => {

    const[sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
            <IconContext.Provider value={{ color: '#fff'}}>
                <Nav>
                    <NavIcon to="#">
                        <IconContext.Provider value={{ className: 'bars' }}>
                            <FaIcons.FaBars onClick={showSidebar}/>
                        </IconContext.Provider>
                    </NavIcon>

                    <HomeButton to="/home">
                        <IconContext.Provider value={{ className: 'homebutton' }}>
                            <FaIcons.FaHome />
                        </IconContext.Provider>
                    </HomeButton>

                    <Socials>
                        <IconContext.Provider value={{ className: 'LinkedIn'}}>
                            <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/ralexaustin9/">
                                <FaIcons.FaLinkedin />
                            </a>
                        </IconContext.Provider>
                        <IconContext.Provider value={{ className: 'Github'}}>
                            <a rel="noreferrer" target="_blank" href="https://github.com/raustin9">
                                <FaIcons.FaGithubSquare />
                            </a>
                        </IconContext.Provider>
                    </Socials>

                </Nav>
                <SidebarNav sidebar={sidebar}>
                    <SidebarWrap>
                        <NavIcon to="#">
                            <AiIcons.AiOutlineClose onClick={showSidebar}/>
                        </NavIcon>
                        {SidebarData.map((item, index) => {
                            return <SubMenu item={item} key={index} />
                        })}
                    </SidebarWrap>
                </SidebarNav>
            </IconContext.Provider>
        </>
    )
}

export default Sidebar
