import React from "react";
import PageLayout from "../components/PageLayout";
import grafika_goldplace from "../static/grafika_goldplace.svg";
import styled from "styled-components";
import Pill from "../components/dimark/Pill";
import Heading2 from "../components/Heading2";

const headPar =
  "The company enables entrepreneurs to lower their administrative costs and run the business more efficiently. Among the services provided are: virtual offices, accounting, setting up and selling companies. Those services are currently provided to around 100 customers. My goal was to design a mobile and desktop application that would raise the quality and effectiveness of provided services.";

function Goldplace(props) {
  return (
    <PageLayout
      color={"#FFE352"}
      logo={grafika_goldplace}
      head={"Gold Place"}
      par={headPar}
    >
      <FlexContainer gap={146} breakpoint={992}>
        <ColumnContainer>
          <Title3 style={{ marginBottom: "24px" }}>
            My role - UX/UI Designer
          </Title3>
          <ul>
            <StyledListItem>Low and High fidelity Wireframes</StyledListItem>
            <StyledListItem>Prototyping</StyledListItem>
            <StyledListItem>Competition research</StyledListItem>
            <StyledListItem>Presented solutions to business</StyledListItem>
            <StyledListItem>Research on the user needs</StyledListItem>
            <StyledListItem>
              Analyzing technical constraints and negotiating with the technical
              team
            </StyledListItem>
          </ul>
        </ColumnContainer>
        <FlexDateToolsContainer>
          <ColumnContainer>
            <Title3>Date</Title3>
            <TextListStyle style={{ marginBottom: "30px" }}>
              April 2021 - April 2022
            </TextListStyle>
          </ColumnContainer>

          <ColumnContainer>
            <Title3>Tools</Title3>
            <TextListStyle>Adobe XD</TextListStyle>
            <TextListStyle>Miro</TextListStyle>
            <TextListStyle>Asana</TextListStyle>
          </ColumnContainer>
        </FlexDateToolsContainer>
      </FlexContainer>
      <CenterContainer>
        <FlexWrapContainer>
          <Pill color={"rgba(255, 227, 82, 0.7)"} text={"Discovery"} />
          <Pill color={"rgba(255, 227, 82, 0.8)"} text={"Modeling"} />
          <Pill color={"rgba(255, 227, 82, 1)"} text={"Design & Prototyping"} />
        </FlexWrapContainer>
      </CenterContainer>
      <Heading2 color={"#FDEA83"} text={"Discovery"} />
      <Paragraph>
        After receiving the initial assumptions and business requirements, I
        focused on determining what is currently the biggest problem that needs
        to be solved and who the user is. At this stage, I also put a lot of
        emphasis on contact with the client in order to better understand their
        expectations and way of thinking. Knowing that the target user is a
        person who values ​​freedom and mobility, that's why they choose to use
        a virtual office. They do not want to be limited by space or to deal
        with unnecessary office activities that make it difficult for them to
        run their business.
      </Paragraph>
      <Paragraph />
      <Paragraph>
        I made an analysis of direct and indirect competition. I compared and
        analyzed the tools available on the market and those that seemed
        interesting to the client.
      </Paragraph>
      <Paragraph />
      <Paragraph>
        When I had enough information, I conducted a quick workshop with the
        client and programmers to establish a common vision and select key
        functionalities. - I used Figjam for this purpose
      </Paragraph>
    </PageLayout>
  );
}

export default Goldplace;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const FlexRowContainer = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  ${({ gap, mobileGap }) =>
    `gap: ${mobileGap}px;
    @media (min-width: 992px) {
    gap: ${gap}px;
  }
  `}
`;

const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 96px;
`;

const FlexWrapContainer = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  @media (min-width: 992px) {
    gap: 52px;
    justify-content: flex-start;
  }
`;

const FlexDateToolsContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 20px;
  padding-bottom: 0px;
  width: 80%;
  justify-content: space-between;
  gap: 40px;
  @media (min-width: 992px) {
    flex-direction: column;
    justify-content: center;
    width: auto;
    gap: 0px;
    padding: 0px;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  margin-bottom: 64px;
  justify-content: center;
  align-items: center;
  ${({ mobileGap }) => `
  gap: ${mobileGap}px;
  `}
  flex-direction: column;
  ${({ gap, breakpoint }) =>
    `
      @media (min-width: ${breakpoint}px) {
    flex-direction: row;
      gap: ${gap}px;
      }
  `}
`;

const Title3 = styled.h3`
  font-family: "Kanit";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  margin: unset;
  line-height: 40px;
  /* identical to box height, or 200% */

  /* Black */

  color: #161616;
`;
const StyledListItem = styled.li`
  font-family: "Cabin";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  margin: unset;
  line-height: 32px;
  /* or 229% */

  color: #000000;
`;

const TextListStyle = styled.p`
  font-family: "Cabin";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 32px;
  margin: unset;
  /* or 229% */

  color: #000000;
`;

const Paragraph = styled.p`
  font-family: "Cabin";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* or 150% */

  color: #1c1c1c;
`;

const FullWidthImg = styled.img`
  width: 100%;
  height: auto;
`;
