import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Card({ head, text, img, to }) {
  return (
    <Container>
      <Img src={img} alt={`${head}-cover`} />
      <TextContainer>
        <Head>{head}</Head>
        <Text>{text}</Text>
        <StyledLink to={to}> View Project </StyledLink>
      </TextContainer>
    </Container>
  );
}

export default Card;

const Container = styled.div`
  width: fit-content;
  height: fit-content;
  @media (min-width: 1100px) {
    width: 450px;
  }
  background: #ffffff;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Img = styled.img`
  width: 100%;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 80%;
`;
const Head = styled.h3`
  font-family: "Kanit";
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  color: #161616;
  margin-bottom: 8px;
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: row;
  width: 163px;
  height: 41px;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  border: 2px solid #262c30;
  border-radius: 2px;
  background-color: #fff;
  text-decoration: none;
  box-shadow: 3px 3px 0 0 #262c30;
  transition: background-color 200ms cubic-bezier(0.637, 0.358, 0.175, 0.878);
  :hover {
    box-shadow: none;
    background-color: #161616;
    transform: translate(2px, 2px);
    color: white;
  }
  font-family: "Kanit";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;

  margin-bottom: 33px;
  /* Black */

  color: #161616;
`;

const Text = styled.p`
  font-family: "Cabin";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #1c1c1c;
  margin-bottom: 45px;
`;
