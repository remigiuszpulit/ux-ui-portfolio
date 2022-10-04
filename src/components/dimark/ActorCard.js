import React from "react";
import styled from "styled-components";

function ActorCard({ icon, title, par }) {
  return (
    <Container>
      <Icon src={icon} />
      <Title>{title}</Title>
      <Par>{par}</Par>
    </Container>
  );
}

export default ActorCard;

const Container = styled.div`
  display: flex;
  width: 181px;
  flex-direction: column;
`;

const Icon = styled.img`
  width: 68px;
  height: 48px;
`;

const Title = styled.h4`
  font-family: "Kanit";
  margin: unset;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 40px;
  color: #1c1c1c;
`;

const Par = styled.p`
  font-family: "Cabin";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  margin: unset;
  line-height: 24px;
  /* or 150% */

  color: #1c1c1c;
`;
