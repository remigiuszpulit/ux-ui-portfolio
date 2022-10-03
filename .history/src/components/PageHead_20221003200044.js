import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function PageHead({ color, logo, head, par }) {
  return (
    <Container>
      <Wrapper>
        <BackLink></BackLink>
      </Wrapper>
    </Container>
  );
}

export default PageHead;

const Container = styled.div`
  height: 349px;
  background-color: black;
  padding-top: 150px;
  @media (min-width: 768px) {
    padding-top: 105px;
  }
`;

const Wrapper = styled.div`
  width: 73%;
  display: flex;
  flex-direction: column;
`;

const BackLink = styled(Link)`
  display: flex;
`;
