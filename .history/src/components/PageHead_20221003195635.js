import React from "react";
import styled from "styled-components";

function PageHead({ color, logo, head, par }) {
  return <Container>PageHead</Container>;
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

const Wrapper = styled.div``;
