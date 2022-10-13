import React, { useState } from "react";
import styled from "styled-components";
import avatar from "../static/avatar.svg";
import "@fontsource/kanit";
import { Link, useLocation } from "react-router-dom";
import SideMenu from "./SideMenu";
import Hamburger from "./Hamburger";
import useWindowSize from "../hooks/useWindowSize";
import ResumePreview from "./ResumePreview";

function Navbar() {
  const windowWidth = useWindowSize().width;
  const location = useLocation();
  const isLight = location.pathname !== "/";
  const [open, setOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <NavContainer isLight={isLight}>
      {windowWidth <= 992 && (
        <SideMenu open={open} setOpen={setOpen}>
          <MenuItem
            to={"/"}
            isLight={isLight && !open}
            isActive={location.pathname === "/"}
          >
            Work
          </MenuItem>
          <MenuItem isLight={isLight && !open}>About Me</MenuItem>
          <MenuItem
            to={"/contact"}
            isActive={location.pathname === "/contact"}
            isLight={isLight && !open}
          >
            Contact
          </MenuItem>
        </SideMenu>
      )}

      <ResumePreview isOpen={isModalOpen} setOpen={setModalOpen} />
      <NavWrapper>
        <ItemsWrapper to={"/"}>
          <img src={avatar} alt="Avatar" />
          <LogoText isLight={isLight && !open}>
            Jagoda Pulit-Pacanowska
          </LogoText>
        </ItemsWrapper>
        {windowWidth > 992 ? (
          <ItemsWrapperNoLink>
            <MenuItem
              to={"/"}
              isLight={isLight}
              isActive={location.pathname === "/"}
            >
              Work
            </MenuItem>
            <MenuItem isLight={isLight}>About Me</MenuItem>
            <MenuItem
              to={"/contact"}
              isActive={location.pathname === "/contact"}
              isLight={isLight}
            >
              Contact
            </MenuItem>
            <ResumeButton onClick={() => setModalOpen(true)} isLight={isLight}>
              <ResumeButtonText isLight={isLight} id="buttonText">
                show resume
              </ResumeButtonText>
            </ResumeButton>
          </ItemsWrapperNoLink>
        ) : (
          <Hamburger
            color={isLight && !open ? "white" : "#161616"}
            open={open}
            setOpen={setOpen}
          />
        )}
      </NavWrapper>
    </NavContainer>
  );
}

export default Navbar;

const NavContainer = styled.nav`
  height: 75px;
  background: rgba(232, 228, 222, 0.01);
  backdrop-filter: blur(3px);
  position: fixed;
  display: flex;
  width: 100%;
  z-index: 500;

  justify-content: center;
  ${({ isLight }) =>
    isLight &&
    `background: rgba(22, 22, 22, 0.7);
    
    color: white;
  `}
`;

const NavWrapper = styled.div`
  width: 83%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  @media (min-width: 768px) {
    justify-content: space-between;
    flex-direction: row;
    width: 93%;
  }
`;
const ItemsWrapper = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const ItemsWrapperNoLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MenuItem = styled(Link)`
  font-family: "Kanit";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: #3c3c3c;
  ${({ isLight }) =>
    isLight &&
    `
  color: white;
  `}
  text-decoration: none;
  margin-left: 32px;
  ${({ isActive }) =>
    isActive &&
    `
    color: #161616;
  font-weight: 600;
  `}
  :hover {
    color: #e5257a;
  }
`;

const LogoText = styled.h3`
  margin-left: 16px;
  font-family: "Kanit";

  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  @media (min-width: 768px) {
    font-size: 20px;
  }
  line-height: 124%;
  color: #161616;
  ${({ isLight }) =>
    isLight &&
    `
    
    color: white;
  `}
`;

const ResumeButton = styled.button`
  display: flex;
  flex-direction: row;
  width: 163px;
  height: 41px;
  justify-content: center;
  margin-left: 42px;
  align-items: center;
  padding: 10px;
  border: 2px solid #262c30;
  border-radius: 2px;
  transition: background-color 200ms cubic-bezier(0.637, 0.358, 0.175, 0.878);
  background-color: #fff;
  box-shadow: 3px 3px 0 0 #262c30;
  :hover {
    box-shadow: none;
    background-color: #161616;
    transform: translate(2px, 2px);
    #buttonText {
      color: white;
    }
  }
`;

const ResumeButtonText = styled.h4`
  font-family: "Kanit";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  color: #161616;

  /* identical to box height */

  text-transform: uppercase;

  flex: none;
  order: 0;
  flex-grow: 0;
`;
