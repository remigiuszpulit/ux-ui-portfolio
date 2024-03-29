import React from "react";
import styled from "styled-components";

function Pill({ color, text }) {
  return (
    <Box style={{ background: color }}>
      <Text>{text}</Text>
    </Box>
  );
}

export default Pill;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px;
  width: 100px;
  height: 20px;
  gap: 10px;
  z-index: 0;
  backdrop-filter: blur(5.5px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 10px;
`;

const Text = styled.p`
  font-family: "Kanit";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  /* or 250% */

  text-align: center;

  color: #1c1c1c;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;
