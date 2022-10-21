import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Card({ head, text, img, to, hidebtn, inactive }) {
  return inactive ? (
    <ContainerInactive>
      <Img src={img} alt={`${head}-cover`} />
      <TextContainer>
        <Head>{head}</Head>
        <Text>{text}</Text>
        {!hidebtn && <StyledLink to={to}> View Project </StyledLink>}
      </TextContainer>
    </ContainerInactive>
  ) : (
    <Container to={to}>
      <Img src={img} alt={`${head}-cover`} />
      <TextContainer>
        <Head>{head}</Head>
        <Text>{text}</Text>
        {!hidebtn && <StyledLink to={to}> View Project </StyledLink>}
      </TextContainer>
    </Container>
  );
}

export default Card;

const Container = styled(Link)`
  width: fit-content;
  height: 550px;
  /* box-sizing: content-box; */
  text-decoration: none;

  @media (min-width: 1100px) {
    width: 450px;
  }
  background: #ffffff;
  /* margin-bottom: 20px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid transparent;
  transition: all 50ms ease-in;
  :hover {
    box-shadow: 3px 3px 0 0 #262c30;

    border: 2px solid #262c30;
    border-radius: 2px;
    /* width: calc(450px - 5px);
    height: calc(550px - 5px); */
    /* background-color: #161616; */
    transform: translate(-3px, -3px);
  }
`;

const ContainerInactive = styled.div`
  width: fit-content;
  height: 550px;
  /* box-sizing: content-box; */
  text-decoration: none;

  @media (min-width: 1100px) {
    width: 450px;
  }
  background: #ffffff;
  /* margin-bottom: 20px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid transparent;
  transition: all 50ms ease-in;
`;

const Img = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
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
  height: 92px;
  font-weight: 400;
  font-size: 16px;
  color: #1c1c1c;
  margin-bottom: 45px;
`;
