import React from "react";
import styled from "styled-components";
import check_icon from "../static/check_icon.svg";
import x_circle_icon from "../static/x_circle_icon.svg";
import x_icon from "../static/x_icon.svg";
import useWindowSize from "../hooks/useWindowSize";

function Snackbar({ isError, message, isActive, closefn }) {
  const windowWidth = useWindowSize().width;

  return (
    <Container
      isError={isError}
      isActive={isActive}
      onClick={() => (windowWidth <= 992 ? closefn() : null)}
    >
      {windowWidth > 992 && (
        <CloseIcon onClick={() => closefn()}>
          <img src={x_icon} alt="close-modal" />
        </CloseIcon>
      )}

      <TextContainer>
        <Icon src={isError ? x_circle_icon : check_icon} />
        <Text>{message}</Text>
      </TextContainer>
    </Container>
  );
}

export default Snackbar;

const Container = styled.div`
  background-color: rgba(0, 147, 149, 0.26);
  ${({ isError }) => isError && `background-color: rgba(255, 64, 0, 0.26);`}

  position: fixed;
  padding-left: 24px;
  padding-right: 24px;
  height: 56px;
  width: 200px;
  left: 20px;
  border: 2px solid #262c30;
  box-shadow: 3px 3px 0 0 #262c30;
  backdrop-filter: blur(8px);

  z-index: 650;

  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.35);

  bottom: -100vh;
  @media (min-width: 992px) {
    bottom: -100vh;
    width: 428px;
    height: 80px;
  }

  ${({ isActive }) =>
    isActive &&
    `
  
  bottom: 35vh;
  @media (min-width: 992px) {
    bottom: 26vh;
    
    height: 80px;
  }
  `}
`;

const Text = styled.h4`
  font-family: "Kanit";
  font-style: normal;
  font-weight: 600;
  margin: unset;
  margin-left: 16px;
  font-size: 14px;
  line-height: 15px;
  @media (min-width: 992px) {
    font-size: 20px;
    line-height: 21px;
  }

  color: #161616;
`;

const TextContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: space-between;
`;

const Icon = styled.img`
  width: 21px;
  height: 21px;
  @media (min-width: 992px) {
    width: 42px;
    height: 42px;
  }
`;

const CloseIcon = styled.button`
  position: absolute;
  width: 20px;
  height: 20px;
  right: 5px;
  top: 5px;
  border: none;
  background: none;
  cursor: pointer;
`;
