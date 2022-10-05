import React from "react";
import grafika_goldplace from "../static/grafika_goldplace.svg";
import goldplace_discovery from "../static/goldplace_discovery.png";
import goldplace_stages from "../static/goldplace_stages.svg";
import styled from "styled-components";
import PageLayout from "../components/PageLayout";
import Pill from "../components/dimark/Pill";
import Heading2 from "../components/Heading2";
import golplace_mobile_62 from "../static/goldplace_mobile_62.png";
import golplace_mobile_63 from "../static/goldplace_mobile_63.png";
import golplace_mobile_64 from "../static/goldplace_mobile_64.png";
import golplace_mobile_65 from "../static/goldplace_mobile_65.png";
import golplace_mobile_66 from "../static/goldplace_mobile_66.png";
import golplace_mobile_67 from "../static/goldplace_mobile_67.png";
import golplace_mobile_68 from "../static/goldplace_mobile_68.png";
import golplace_mobile_69 from "../static/goldplace_mobile_69.png";
import golplace_mobile_70 from "../static/goldplace_mobile_70.png";
import golplace_mobile_71 from "../static/goldplace_mobile_71.png";
import golplace_mobile_72 from "../static/goldplace_mobile_72.png";
import golplace_mobile_73 from "../static/goldplace_mobile_73.png";
import golplace_mobile_74 from "../static/goldplace_mobile_74.png";
import golplace_mobile_75 from "../static/goldplace_mobile_75.png";
import golplace_mobile_76 from "../static/goldplace_mobile_76.png";
import golplace_mobile_77 from "../static/goldplace_mobile_77.png";
import golplace_mobile_78 from "../static/goldplace_mobile_78.png";
import golplace_mobile_79 from "../static/goldplace_mobile_79.png";
import golplace_mobile_80 from "../static/goldplace_mobile_80.png";
import goldplace_desktop_1 from "../static/goldplace_desktop_1.png";
import goldplace_desktop_2 from "../static/goldplace_desktop_2.png";

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
      <Paragraph style={{ marginBottom: "64px" }}>
        When I had enough information, I conducted a quick workshop with the
        client and programmers to establish a common vision and select key
        functionalities. - I used Figjam for this purpose
      </Paragraph>
      <FullWidthImg
        src={goldplace_discovery}
        style={{ marginBottom: "64px" }}
      />
      <Paragraph style={{ marginBottom: "64px" }}>
        As it sometimes happens, the client did not allow me to contact end
        users to better understand who I was designing for, I was collecting
        data from the company's employees.
      </Paragraph>
      <Title3 style={{ marginBottom: "32px" }}>Conclusions:</Title3>
      <Paragraph>
        Cdurrent process is mainly focused on manual activities performed by
        reception staff. The entire correspondence service was based on scanning
        letters and sending scans by e-mail, conference rooms were booked by
        phone using a schedule available only to the reception desk staff. This
        caused a heavy burden on reception staff and communication problems.
      </Paragraph>
      <Paragraph />
      <Paragraph>
        The user cannot independently view the schedule and book conference
        rooms at convenient times, and they cannot change the date and room on
        their own. New correspondence is not immediately visible to them, they
        are forced to check the e-mail box, they have no collective preview of
        their correspondence (except for the e-mail box) - they have to find a
        place (computer, cloud, phone) where they will be able to collect it.
      </Paragraph>
      <Paragraph />
      <Paragraph style={{ marginBottom: "64px" }}>
        The user needs a place where they can be in control of their affairs
        from wherever they are.
      </Paragraph>
      <Title3 style={{ marginBottom: "17px" }}>Design Challenges</Title3>
      <ul style={{ marginLeft: "24px", marginBottom: "64px" }}>
        <StyledListItem>Intuitive access to correspondence</StyledListItem>
        <StyledListItem>Contact with reception staff</StyledListItem>
        <StyledListItem>
          Transparent calendar that allows booking conference rooms
        </StyledListItem>
        <StyledListItem>Overdue payments reminders</StyledListItem>
      </ul>
      <Heading2 color={"#FEE872"} text={"Modeling"} />
      <Paragraph>
        Having already known a lot, I started to create the initial flow of the
        application, including the mobile and desktop versions. I also created a
        styleguide in order to be able to present my ideas to a client who
        insisted on presenting ready-made screens, it was not without
        discussion, but we managed to develop a common vision.
      </Paragraph>
      <Paragraph />
      <Paragraph style={{ marginBottom: "24px" }}>
        At this stage, I adapted to the client and created an action plan
        tailored to his expectations. I divided my work into stages:
      </Paragraph>
      <FullWidthImg src={goldplace_stages} style={{ marginBottom: "24px" }} />
      <Paragraph style={{ marginBottom: "64px" }}>
        I also created materials that helped me better understand the processes
        like Cards and paper prototypes. After each stage, I presented the
        results of my work to the client and organized meetings where we could
        discuss issues or work out new solutions. I also managed to listen to
        the client and meet their expectations also in terms of visual matters,
        e.g. paddings, styles, colors - keeping in mind good design patterns and
        WCAG. The project has been approved by the client and is currently being
        implemented and deployed.
      </Paragraph>
      <Heading2 color={"#FFE352"} text={"Design and prototype"} />
      <Paragraph>
        Knowing the needs and concerns of users, I was able to compare them with
        the business requirements and I was able to consult them on technical
        possibilities with the team of developers.
      </Paragraph>
      <Title3 style={{ marginBottom: "24px" }}>Mobile</Title3>
      <RegularFlexWrap style={{ marginBottom: "64px" }}>
        <MobileImage src={golplace_mobile_62} />
        <MobileImage src={golplace_mobile_63} />
        <MobileImage src={golplace_mobile_64} />
        <MobileImage src={golplace_mobile_65} />
        <MobileImage src={golplace_mobile_66} />
        <MobileImage src={golplace_mobile_67} />
        <MobileImage src={golplace_mobile_68} />
        <MobileImage src={golplace_mobile_69} />
        <MobileImage src={golplace_mobile_70} />
        <MobileImage src={golplace_mobile_71} />
        <MobileImage src={golplace_mobile_72} />
        <MobileImage src={golplace_mobile_73} />
        <MobileImage src={golplace_mobile_74} />
        <MobileImage src={golplace_mobile_75} />
        <MobileImage src={golplace_mobile_76} />
        <MobileImage src={golplace_mobile_77} />
        <MobileImage src={golplace_mobile_78} />
        <MobileImage src={golplace_mobile_79} />
        <MobileImage src={golplace_mobile_80} />
      </RegularFlexWrap>
      <Title3 style={{ marginBottom: "24px" }}>Desktop</Title3>
      <FlexContainer
        mobileGap={24}
        gap={54}
        breakpoint={992}
        style={{ marginBottom: "64px" }}
      >
        <HalfContainer>
          <FullWidthImg src={goldplace_desktop_1} />
        </HalfContainer>
        <HalfContainer>
          <FullWidthImg src={goldplace_desktop_2} />
        </HalfContainer>
      </FlexContainer>
      <Paragraph>
        By dividing the work into stages, a full application project was
        created, which is currently being implemented by a team of developers.
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
  gap: 18px;
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
