import React from "react";
import styled from "styled-components";

function Snackbar({ isError, message, isActive }) {
  return (
    <Container isError={isError} isActive={isActive}>
      <TextContainer>
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
  width: 80%;
  border: 2px solid #262c30;
  box-shadow: 3px 3px 0 0 #262c30;
  backdrop-filter: blur(8px);

  z-index: 650;
  display: flex;
  flex-direction: column;
  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.35);

  left: 13%;
  bottom: -100vh;
  @media (min-width: 992px) {
    bottom: -100vh;
    left: 35%;
    height: 80px;
    width: 30%;
  }

  ${({ isActive }) =>
    isActive &&
    `
  left: 13%;
  bottom: 35vh;
  @media (min-width: 992px) {
    bottom: 26vh;
    left: 35%;
    height: 80px;
    width: 30%;
  }
  `}
`;

const Text = styled.h4`
  font-family: "Kanit";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  @media (min-width: 992px) {
    font-size: 20px;
  }
  line-height: 21px;
  color: #161616;
`;

const TextContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
