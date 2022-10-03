import React from "react";
import styled from "styled-components";
import avatar from "../static/avatar.svg";
import LinkedinIcon from "../static/LinkedinIcon.svg";
import LinkedinIconWhite from "../static/LinkedinIconWhite.svg";
import "@fontsource/kanit";
import { useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const isLight = location.pathname != "/";
  return (
    <NavContainer>
      <NavWrapper>
        <ItemsWrapper>
          <img src={avatar} alt="Avatar" />
          <LogoText isLight={isLight}>Jagoda Pulit-Pacanowska</LogoText>
        </ItemsWrapper>
        <ItemsWrapper>
          <a
            href="https://www.linkedin.com/in/jagoda-pulit/"
            target={"_blank"}
            rel="noreferrer"
          >
            <img
              src={isLight ? LinkedinIconWhite : LinkedinIcon}
              alt="LinkedinIcon"
            />
          </a>
          <ResumeButton isLight={isLight}>
            <ResumeButtonText isLight={isLight}>show resume</ResumeButtonText>
          </ResumeButton>
        </ItemsWrapper>
      </NavWrapper>
    </NavContainer>
  );
}

export default Navbar;

const NavContainer = styled.nav`
  height: 105px;
  background: rgba(232, 228, 222, 0.01);
  backdrop-filter: blur(3px);
  position: fixed;
  display: flex;
  width: 100%;
  z-index: 500;
  justify-content: center;
`;

const NavWrapper = styled.div`
  width: 73%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (min-width: 768px) {
    justify-content: space-between;
    flex-direction: row;
    width: 73%;
  }
`;
const ItemsWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const LogoText = styled.h3`
  margin-left: 16px;
  font-family: "Kanit";

  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  @media (min-width: 768px) {
    font-size: 24px;
  }
  line-height: 124%;
  color: #161616;
  ${({ isLight }) =>
    isLight &&
    `
    background-color: #161616;
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
  background: #161616;
  border-radius: 159px;
  ${({ isLight }) =>
    isLight &&
    `
    background: white;
  `}
`;

const ResumeButtonText = styled.h4`
  font-family: "Kanit";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height */

  text-transform: uppercase;

  color: #ffffff;

  /* Inside auto layout */
  ${({ isLight }) =>
    isLight &&
    `
    color: #161616;
  `}

  flex: none;
  order: 0;
  flex-grow: 0;
`;
