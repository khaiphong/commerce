import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';

const Nav = styled.div`
  background: #256ce1;
  height: 36px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 1rem;
  font-size: 1.5rem;
  height: 36px;
  display: flex;
  color: rgb(180, 126, 9);
  text-decoration: none;
  justify-content: flex-start;
  align-items: center;

  p {
    color: rgb(180, 126, 9);
    font-weight: bold;
    margin-right: 1rem;
  }
`;

const MenuBars = styled.div`
  margin-right: 0rem;
  font-size: 2rem;
  padding-right: 1rem;
  background: none;
`;
const ToggleButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 18px;
  width: 21px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding-left: 0;
  box-sizing: border-box;
`;
const ToggleLine = styled.div`
  width: 100%;
  height: 2px;
  background: white;
`;

export const ServiceLink = styled(Link)`
  color: white;
  font-size: 1rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-left: 1rem;
  cursor: pointer;

  @media screen and (max-width: 300px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }
`;
// goto Pdb for required serviceAlerts action or delete
const serviceAlerts = () => {

};
const Spacer = styled.div`
  flex: 1;
`;

const SidebarNav = styled.nav`
  background: #256ce1;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  right: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <Nav>
        <ServiceLink to='#' onClick={serviceAlerts} >
            You have 5 alerts waiting to take actions.
        </ServiceLink>
        <Spacer />
        <NavIcon to='#' onClick={showSidebar} >
          <p>Commerce</p>
          <MenuBars>
            <ToggleButton >
              <ToggleLine />
              <ToggleLine />
            </ToggleButton>
            </MenuBars>
        </NavIcon>  
      </Nav>
      <SidebarNav sidebar={sidebar} onClick={showSidebar}>
        <SidebarWrap>
          <NavIcon to='#' >
            X
          </NavIcon>
          {SidebarData.map((item, index) => {
            return <SubMenu item={item} key={index} />;
          })}
        </SidebarWrap>
      </SidebarNav>
    </>
  )
}

export default Sidebar
