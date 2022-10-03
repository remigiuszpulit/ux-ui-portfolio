import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ArrowLeft from "./ArrowLeft";

function PageHead({ color, logo, head, par }) {
  return (
    <Container>
      <Wrapper>
        <BackLink>
          <ArrowLeft color={color} />
        </BackLink>
      </Wrapper>
    </Container>
  );
}

export default PageHead;

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 349px;
  background-color: black;
  padding-top: 150px;
  @media (min-width: 768px) {
    padding-top: 105px;
  }
`;

const Wrapper = styled.div`
  padding-top: 21px;
  width: 73%;
  display: flex;
  flex-direction: column;
`;

const BackLink = styled(Link)`
  display: flex;
`;
