import React from "react";

function Pill({ opacity, text }) {
  const color = `rgba(255, 64, 0, ${opacity})`;

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
  padding: 71px 68px;
  gap: 10px;
  backdrop-filter: blur(5.5px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 45px;
`;

const Text = styled.p`
  font-family: "Kanit";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 40px;
  /* or 250% */

  text-align: center;

  color: #1c1c1c;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;
