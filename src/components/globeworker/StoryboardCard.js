import React from "react";
import styled from "styled-components";

function StoryboardCard({ image, text }) {
  return (
    <Container>
      <Image src={image} />
      <Par>{text}</Par>
    </Container>
  );
}

export default StoryboardCard;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 182px;
  height: 350px;
`;
const Image = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 12px;
  border-radius: 6px;
`;
const Par = styled.p`
  font-family: "Cabin";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* or 150% */

  color: #1c1c1c;
`;
