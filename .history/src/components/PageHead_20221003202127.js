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
        <HeadContainer>
          <HeadWrapper>
            <ImageContainer src={logo} />
            <TextContainer>
              <HeadText>{head}</HeadText>
              <HeadPar>{par}</HeadPar>
            </TextContainer>
          </HeadWrapper>
        </HeadContainer>
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

const HeadContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const HeadWrapper = styled.div`
  width: 85%;
  display: flex;
`;

const ImageContainer = styled.img``;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const HeadText = styled.h1`
  font-family: "Kanit";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;
  /* identical to box height */

  text-align: center;

  color: #ffffff;
`;

const HeadPar = styled.p`
  font-family: "Cabin";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 128%;
  /* or 20px */

  color: #ffffff;
`;
