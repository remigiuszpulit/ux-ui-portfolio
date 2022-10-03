import React from "react";
import styled from "styled-components";

function Heading2({ text, color }) {
  return (
    <Container>
      <Line style={{ border: `7px solid ${color}` }} />
      <Text>{text}</Text>
    </Container>
  );
}

export default Heading2;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Line = styled.div`
  width: 73px;
  height: 0px;
`;

const Text = styled.h2`
  /* H2 */

  font-family: "Kanit";
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 40px;
  /* identical to box height, or 154% */

  /* Dark gray */

  color: #353535;
`;
