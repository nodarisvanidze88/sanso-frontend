import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { SideBarData } from './NavBarData'
import { Submenu } from './NavBarSubMenu'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBarsStaggered, faXmark } from "@fortawesome/free-solid-svg-icons"

const Nav = styled.div`
    background: #121212;
    height: 50px;
    display: flex;
    justify-content: flex-start;
    align-self: flex-start;
    font-size: 20px;
`

const NavIcon = styled(Link)`
    margin-left: 2rem;
    font-size: 1.5rem;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;
const SideBarNav = styled.nav`
  background: #15171c;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top:0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index:10;
`;

const SideBarWrap = styled.div`
width:100%;
`;

const NavBar = () => {
    const [sidebar, setSidebar] = useState(false)
    const sidebarRef = useRef(null);
    const showSidebar = () => setSidebar(!sidebar)
    useEffect(() => {
        const closeSidebarOnClickOutside = (e) => {
            if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
                setSidebar(false);
            }
        };
        document.addEventListener('mousedown', closeSidebarOnClickOutside);
        return () => {
            document.removeEventListener('mousedown', closeSidebarOnClickOutside);
        };
    }, []);

    return (
        <>
            <Nav>
                <NavIcon to='#'>
                    <div onClick={showSidebar}>
                        <FontAwesomeIcon icon={faBarsStaggered} size="2xl" />
                    </div>
                </NavIcon>
                <SideBarNav sidebar={sidebar} ref={sidebarRef}>
                    <SideBarWrap>
                        <NavIcon to='#'>
                            <div onClick={showSidebar}>
                                <FontAwesomeIcon icon={faXmark} size="2xl" />
                            </div>
                        </NavIcon>
                        {SideBarData.map((item, index) => {
                            return (
                                <Submenu item={item} key={index} />
                            )
                        })}
                    </SideBarWrap>
                </SideBarNav>
            </Nav>
        </>
    )
}

export default NavBar

