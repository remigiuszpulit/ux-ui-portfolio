import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ArrowLeft from "./ArrowLeft";

function PageHead({ color, logo, head, par }) {
  return (
    <Container>
      <Wrapper>
        <BackLink to={"/"}>
          <ArrowLeft color={color} />
          <BackLinkText>Home</BackLinkText>
        </BackLink>
        <HeadWrapper />
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
  align-items: center;
`;

const BackLinkText = styled.span`
  font-family: "Kanit";
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  text-decoration: none;
  margin-left: 13px;
  /* identical to box height */

  color: #ffffff;
`;

const HeadWrapper = styled.div`
  width: 73%;
  background: white;
`;
