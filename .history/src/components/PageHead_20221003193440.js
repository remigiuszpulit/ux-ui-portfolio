import React from "react";
import styled from "styled-components";

function PageHead(props) {
  return <Container>PageHead</Container>;
}

export default PageHead;

const Container = styled.div`
  background-color: black;
  margin-top: 150px;
  @media (min-width: 768px) {
    margin-top: 105px;
  }
`;

const Wrapper = styled.div``;
