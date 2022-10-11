import React from "react";
import styled from "styled-components";

function ColorPill({ color, name }) {
  return (
    <Container>
      <Pill color={color} /> <Text>{name}</Text>
    </Container>
  );
}

export default ColorPill;

const Container = styled.div`
  width: 80px;

  @media (min-width: 758px) {
    width: 100px;
  }
  display: flex;
  flex-direction: column;
`;

const Pill = styled.div`
  width: 80px;
  height: 80px;
  @media (min-width: 758px) {
    width: 100px;
    height: 100px;
  }
  border-radius: 50%;
  ${({ color }) => `
background: ${color};
`}
`;

const Text = styled.p`
  font-family: "Cabin";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 32px;
  /* or 229% */

  text-align: center;

  color: #1c1c1c;
`;
