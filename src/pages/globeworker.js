import React from "react";
import styled from "styled-components";
import globeworker_grafika from "../static/globeworker_grafika.svg";
import globeworker_persona_1 from "../static/globeworker_persona_1.svg";
import globeworker_persona_2 from "../static/globeworker_persona_2.svg";
import globeworker_storyboard_1 from "../static/globeworker_storyboard_1.png";
import globeworker_storyboard_2 from "../static/globeworker_storyboard_2.png";
import globeworker_storyboard_3 from "../static/globeworker_storyboard_3.png";
import globeworker_storyboard_4 from "../static/globeworker_storyboard_4.png";
import globeworker_storyboard_5 from "../static/globeworker_storyboard_5.png";
import globeworker_storyboard_6 from "../static/globeworker_storyboard_6.png";
import globeworker_storyboard_7 from "../static/globeworker_storyboard_7.png";
import globeworker_storyboard_8 from "../static/globeworker_storyboard_8.png";
import globeworker_storyboard_9 from "../static/globeworker_storyboard_9.png";
import PageLayout from "../components/PageLayout";
import Pill from "../components/dimark/Pill";
import Heading2 from "../components/Heading2";
import StoryboardCard from "../components/globeworker/StoryboardCard";

const headPar =
  "Globeworker was designed as a challenge to put my knowledge about best practicies and methodologies into a life-like example. It’s main goal is to provide backpackers with the opportunity to work while travelling. ";

function GlobeWorker(props) {
  return (
    <PageLayout
      color={"#009395"}
      logo={globeworker_grafika}
      head={"Globworker - non commercial"}
      par={headPar}
    >
      <FlexContainer gap={146} breakpoint={992}>
        <ColumnContainer>
          <Title3 style={{ marginBottom: "24px" }}>
            My role - UX/UI Designer
          </Title3>
          <ul>
            <StyledListItem>Low and High fidelity Wireframes</StyledListItem>
            <StyledListItem>Research</StyledListItem>
            <StyledListItem>User Journey Mapping</StyledListItem>
            <StyledListItem>Flows</StyledListItem>
          </ul>
        </ColumnContainer>
        <FlexDateToolsContainer>
          <ColumnContainer>
            <Title3>Date</Title3>
            <TextListStyle style={{ marginBottom: "30px" }}>
              December 2020 - March 2021
            </TextListStyle>
          </ColumnContainer>

          <ColumnContainer>
            <Title3>Tools</Title3>
            <TextListStyle>Figma</TextListStyle>
            <TextListStyle>FigJam</TextListStyle>
            <TextListStyle>Miro</TextListStyle>
          </ColumnContainer>
        </FlexDateToolsContainer>
      </FlexContainer>
      <CenterContainer>
        <FlexWrapContainer>
          <Pill
            color={"rgba(0, 147, 149, 0.26)"}
            text={"Discovery & Empathize"}
          />
          <Pill color={"rgba(0, 147, 149, 0.56)"} text={"Modeling"} />
          <Pill color={"#009395"} text={"Design & Prototyping"} />
        </FlexWrapContainer>
      </CenterContainer>
      <Heading2 color={"#B9DEDC"} text={"Discovery & Empathize"} />
      <Title3>User research:</Title3>
      <Paragraph>
        To be able to work on reliable data I have done competition research,
        created a prescreener, screener and user interview scenario. Eight
        people who claimed that they wanted to continue research and met the
        guidelines took part in the interview. During the interviews I have
        asked about crucial issues about the project, I have also asked some
        relaxing questions to reduce the stress of the participants. Having
        spent so much time on talking about backpacking and traveling alone, I
        got to know a lot about such form of travel, and afterwards felt like
        going on a backpacking trip myself
      </Paragraph>
      <Title3>Problems:</Title3>
      <Paragraph>
        When it comes to travel, funding can be a major roadblock. Saving for
        the whole year to visit a place of one’s dreams might be a challange.
        Traveling can also be risky, both when finding a part time job at the
        place or when looking for a companion
      </Paragraph>
      <Title3>Solution:</Title3>
      <Paragraph>
        Globeworker enables users to find jobs for the planned time of stay at
        the certain place, thus allowing them to earn while abroad. Verified and
        trusted employers guarantee safety. The network of verified users enable
        users to meet new people and find company for the trip.
      </Paragraph>
      <Title3 style={{ marginBottom: "24px" }}>User Persona:</Title3>
      <FullWidthImg
        src={globeworker_persona_1}
        style={{ marginBottom: "48px" }}
      />
      <FlexContainer gap={125} mobileGap={24} breakpoint={768}>
        <ColumnContainer style={{ width: "200px" }}>
          <Title3>Goals:</Title3>
          <ul>
            <StyledListItem>Stepping out of the comfort zone.</StyledListItem>
            <StyledListItem>
              Getting to know new places and cultures
            </StyledListItem>
            <StyledListItem>Finding own place in the world</StyledListItem>
            <StyledListItem>Living on her own conditions</StyledListItem>
            <StyledListItem>Learning new languages</StyledListItem>
          </ul>
        </ColumnContainer>
        <ColumnContainer style={{ width: "212px" }}>
          <Title3>Frustrations:</Title3>
          <ul>
            <StyledListItem>
              Not being able to travel because of the full time job.
            </StyledListItem>
            <StyledListItem>Lack of funds for travel</StyledListItem>
            <StyledListItem>Theft while travelling</StyledListItem>
          </ul>
        </ColumnContainer>
      </FlexContainer>
      <Title3 style={{ marginBottom: "24px" }}>User Persona:</Title3>
      <FullWidthImg
        src={globeworker_persona_2}
        style={{ marginBottom: "48px" }}
      />
      <FlexContainer gap={240} mobileGap={24} breakpoint={768}>
        <ColumnContainer style={{ width: "200px" }}>
          <Title3>Gain:</Title3>
          <ul>
            <StyledListItem>Ability to fulfill dreams</StyledListItem>
            <StyledListItem>
              Getting to know new people, cultures and traditions
            </StyledListItem>
            <StyledListItem>Sense of security</StyledListItem>
          </ul>
        </ColumnContainer>
        <ColumnContainer style={{ width: "212px" }}>
          <Title3>Pain:</Title3>
          <ul>
            <StyledListItem>Full-time job</StyledListItem>
            <StyledListItem>Lack of time</StyledListItem>
            <StyledListItem>Not enough funds</StyledListItem>
          </ul>
        </ColumnContainer>
      </FlexContainer>
      <Title3>Storyboard</Title3>
      <Paragraph>Before using app:</Paragraph>
      <Paragraph />
      <RegularFlexWrap>
        <StoryboardCard
          image={globeworker_storyboard_1}
          text={
            "Katarzyna finishes her workday as call center agent tired, as she took overtime to raise more funds for the trip."
          }
        />
        <StoryboardCard
          image={globeworker_storyboard_2}
          text={
            "On the way home, she watches other people's vlogs and makes plans for the next journey."
          }
        />
        <StoryboardCard
          image={globeworker_storyboard_3}
          text={
            "She would like to go on another trip, but she has no paid leave days left."
          }
        />
        <StoryboardCard
          image={globeworker_storyboard_4}
          text={
            "She applies for unpaid leave, the boss agrees under condition that it is the last time."
          }
        />
        <StoryboardCard
          image={globeworker_storyboard_5}
          text={
            "She is looking for opportunities to earn money while traveling, to feel financially secure during her trip."
          }
        />
      </RegularFlexWrap>
      <Paragraph>After using app::</Paragraph>
      <Paragraph />
      <RegularFlexWrap>
        <StoryboardCard
          image={globeworker_storyboard_6}
          text={
            "She finds the app and starts signing up, next she discovers  interesting offers that perfectly match her expectations."
          }
        />
        <StoryboardCard
          image={globeworker_storyboard_7}
          text={
            "After completing her account she starts applying for job offers, feeling safe as the employers are verified."
          }
        />
        <StoryboardCard
          image={globeworker_storyboard_8}
          text={
            "After getting confirmation of employment, she starts looking for trip companions."
          }
        />
        <StoryboardCard
          image={globeworker_storyboard_9}
          text={
            "She goes on a journey, there are  beautiful countries waiting for her, where she will meet new people, get to know foreing cultures and try herself in various jobs."
          }
        />
      </RegularFlexWrap>
    </PageLayout>
  );
}

export default GlobeWorker;

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

const RegularFlexWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  @media (min-width: 992px) {
    justify-content: flex-start;
    gap: 18px;
  }
`;

const MobileImage = styled.img`
  width: 124px;
  height: 222px;
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
const HalfContainer = styled.div`
  width: 100%;
  @media (min-width: 992px) {
    width: 50%;
  }
`;
