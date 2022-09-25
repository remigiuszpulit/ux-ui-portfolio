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
  width: 590px;
  height: 594px;
  background: #ffffff;
  margin-bottom: 20px;
`;

const Img = styled.img`
  height: 314px;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
