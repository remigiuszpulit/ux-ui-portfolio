import React from "react";
import styled from "styled-components";
import grafika_dimark from "../static/grafika_dimark.svg";
import PageLayout from "../components/PageLayout";
import Pill from "../components/dimark/Pill";
import Heading2 from "../components/Heading2";

const headParagraph =
  "My task was to get to know the users, their problems and to design a solution that would streamline the maintenance procedures of the devices. The tool I have designed is available for desktop and tablet (taking into account that users often wear gloves and use the tablet in difficult surroundings). The design process has undergone multiple iterations to deliver a solution that would fit within the needs of various stakeholders like the airport (customer), end users and internal stakeholders within Dimark.";

function Dimark() {
  return (
    <>
      <PageLayout
        color={"#F05A28"}
        logo={grafika_dimark}
        head={"Dimark IT"}
        par={headParagraph}
      >
        <FlexContainer>
          <ColumnContainer>
            <Title3 style={{ marginBottom: "24px" }}>
              My role - UX/UI Designer
            </Title3>
            <ul>
              <StyledListItem>
                Created solutions for airports’ baggage handling and
                intralogistics system
              </StyledListItem>
              <StyledListItem>
                Research on the user needs and user testing (solution
                validation)
              </StyledListItem>
              <StyledListItem>
                Redesign of other digital products for the company
              </StyledListItem>
              <StyledListItem>
                Product analysis and planning for several aplications
              </StyledListItem>
              <StyledListItem>Presented solutions to business</StyledListItem>
              <StyledListItem>
                Conducted workshops and tests - online and offline
              </StyledListItem>
              <StyledListItem>
                Designed information architecture, wireframes lo-fi and hi-fi,
                user flows, clickable prototypes for tests
              </StyledListItem>
              <StyledListItem>Collaborated with developers</StyledListItem>
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
              <TextListStyle>Figma</TextListStyle>
              <TextListStyle>FigJam</TextListStyle>
              <TextListStyle>Miro</TextListStyle>
              <TextListStyle>Hotjar</TextListStyle>
            </ColumnContainer>
          </FlexDateToolsContainer>
        </FlexContainer>
        <CenterContainer>
          <FlexWrapContainer>
            <Pill opacity={0.26} text={"Discovery & Empathize"} />
            <Pill opacity={0.36} text={"Define"} />
            <Pill opacity={0.46} text={"Ideate"} />
            <Pill opacity={0.56} text={"Prototyping"} />
            <Pill opacity={0.66} text={"Develop"} />
          </FlexWrapContainer>
        </CenterContainer>
        <Heading2
          color={"rgba(255, 64, 0, 0.26)"}
          text={"Discovery & Empathize"}
        />
        <Paragraph>
          I started with discovering the requirements and issues that can be
          solved first. I agreed with the internal business stakeholders on the
          direction we were going to follow and on the targets and requirements
          we needed to fulfill. Next I conducted interviews to get to know the
          real problems and needs of the end users, airport's employees and
          managers.
        </Paragraph>
        <Paragraph> </Paragraph>
        <Paragraph>Here is what I have found out:</Paragraph>
      </PageLayout>
    </>
  );
}

export default Dimark;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
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
  justify-content: center;
  @media (min-width: 992px) {
    gap: 52px;
    justify-content: flex-start;
  }
`;

const FlexDateToolsContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  padding-bottom: 0px;
  justify-content: space-between;
  gap: 40px;
  @media (min-width: 992px) {
    flex-direction: column;
    justify-content: center;
    gap: 0px;
    padding: 0px;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  margin-bottom: 64px;
  flex-direction: column;
  @media (min-width: 992px) {
    flex-direction: row;
    gap: 146px;
  }
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
