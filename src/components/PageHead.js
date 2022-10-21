import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ArrowLeft from "./ArrowLeft";

const PageHead = React.forwardRef(({ color, logo, head, par }, ref) => (
  <Container ref={ref}>
    <Wrapper>
      <BackLink to={"/"}>
        <ArrowLeft color={color} />
        <BackLinkText>Home</BackLinkText>
      </BackLink>
      <HeadContainer>
        <HeadWrapper>
          {logo && <ImageContainer src={logo} />}
          <TextContainer>
            <HeadText>{head}</HeadText>
            <HeadPar>{par}</HeadPar>
          </TextContainer>
        </HeadWrapper>
      </HeadContainer>
    </Wrapper>
  </Container>
));

export default PageHead;

const Container = styled.div`
  display: flex;
  justify-content: center;

  background-color: #161616;
  padding-top: 85px;
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
  text-decoration: none;
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
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  gap: 20px;
  margin-bottom: 24px;

  @media (min-width: 992px) {
    width: 85%;
    flex-direction: row;
    justify-content: center;
    gap: 100px;
    margin-bottom: 48px;
  }
`;

const ImageContainer = styled.img`
  max-height: 250px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const HeadText = styled.h1`
  font-family: "Kanit";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  margin: unset;
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
  max-width: 670px;
  /* or 20px */

  color: #ffffff;
`;
