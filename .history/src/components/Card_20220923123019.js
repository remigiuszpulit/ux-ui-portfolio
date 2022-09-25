import React from "react";
import styled from "styled-components";

function Card({ head, text, img }) {
  return (
    <Container>
      <Img src={img} />
      <TextContainer>
        <Head>{head}</Head>
        <Text>{text}</Text>
      </TextContainer>
    </Container>
  );
}

export default Card;

const Container = styled.div`
  width: 250px;
  height: 250px;
  @media (min-width: 992px) {
    width: 590px;
    height: 594px;
  }
  background: #ffffff;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Img = styled.img`
  max-height: 314px;
  width: auto;
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

const Text = styled.p`
  font-family: "Cabin";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: #1c1c1c;
`;
