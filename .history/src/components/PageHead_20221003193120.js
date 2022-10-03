import React from "react";
import styled from "styled-components";

function PageHead(props) {
  return (
    <Wrapper>
      <Container>PageHead</Container>
    </Wrapper>
  );
}

export default PageHead;

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  margin-top: 150px;
  @media (min-width: 768px) {
    margin-top: 105px;
  }
`;
