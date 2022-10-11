import React from "react";
import styled from "styled-components";
import grafika_dimark from "../static/grafika_dimark.svg";
import PageLayout from "../components/PageLayout";
import Pill from "../components/dimark/Pill";
import Heading2 from "../components/Heading2";
import ActorCard from "../components/dimark/ActorCard";
import dimark_actors_managers from "../static/dimark_actors_managers.svg";
import dimark_actors_employees from "../static/dimark_actors_employees.svg";
import dimark_actors_app from "../static/dimark_actors_app.svg";
import dimark_actors_airport from "../static/dimark_actors_airport.svg";
import dimark_storymap_employee from "../static/dimark_storymap_employee.svg";
import dimark_storymap_employee_new from "../static/dimark_storymap_employee_new.svg";
import dimark_storymap_manager from "../static/dimark_storymap_manager.svg";
import dimark_storymap_manager_new from "../static/dimark_storymap_manager_new.svg";
import dimark_workshops_1 from "../static/dimark_workshops_1.png";
import dimark_workshops_2 from "../static/dimark_workshops_2.png";
import dimark_magazyn_hifi from "../static/dimark_magazyn_hifi.png";
import dimark_magazyn_lofi from "../static/dimark_magazyn_lofi.png";
import dimark_usecases_legend from "../static/dimark_usecases_legend.svg";
import dimark_usecases_1 from "../static/dimark_usecases_1.svg";
import dimark_usecases_2 from "../static/dimark_usecases_2.svg";
import dimark_report_map from "../static/dimark_report_map.svg";
import dimark_warehouse_map_1 from "../static/dimark_warehouse_map_1.svg";
import dimark_warehouse_map_2 from "../static/dimark_warehouse_map_2.svg";
import dimark_manager_dashboard_1 from "../static/dimark_manager_dashboard_1.png";
import dimark_manager_dashboard_2 from "../static/dimark_manager_dashboard_2.png";
import dimark_employee_view_1 from "../static/dimark_employee_view_1.png";
import dimark_employee_view_2 from "../static/dimark_employee_view_2.png";
import belt from "../static/belt.png";

const headParagraph =
  "My task was to get to know the users, their problems and to design a solution that would streamline the maintenance procedures of the devices. The tool I have designed is available for desktop and tablet (taking into account that users often wear gloves and use the tablet in difficult surroundings). The design process has undergone multiple iterations to deliver a solution that would fit within the needs of various stakeholders like the airport (customer), end users and internal stakeholders within Dimark.";

function Dimark() {
  return (
    <PageLayout
      color={"#F05A28"}
      logo={grafika_dimark}
      head={"Dimark IT"}
      par={headParagraph}
    >
      <FlexContainer gap={146} breakpoint={992}>
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
              Research on the user needs and user testing (solution validation)
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
          <Pill
            color={"rgba(255, 64, 0, 0.26)"}
            text={"Discovery & Empathize"}
          />
          <Pill color={"rgba(255, 64, 0, 0.36)"} text={"Define"} />
          <Pill color={"rgba(255, 64, 0, 0.46)"} text={"Ideate"} />
          <Pill color={"rgba(255, 64, 0, 0.56)"} text={"Prototyping"} />
          <Pill color={"rgba(255, 64, 0, 0.66)"} text={"Develop"} />
        </FlexWrapContainer>
      </CenterContainer>
      <Heading2
        color={"rgba(255, 64, 0, 0.26)"}
        text={"Discovery & Empathize"}
      />
      <Paragraph>
        I started with discovering the requirements and issues that can be
        solved first. I agreed with the internal business stakeholders on the
        direction we were going to follow and on the targets and requirements we
        needed to fulfill. Next I conducted interviews to get to know the real
        problems and needs of the end users, airport's employees and managers.
      </Paragraph>
      <Paragraph> </Paragraph>
      <Paragraph>Here is what I have found out:</Paragraph>
      <Title3>Actors:</Title3>
      <FlexContainer
        style={{ paddingTop: "25px" }}
        gap={82}
        mobileGap={20}
        breakpoint={1300}
      >
        <FlexRowContainer gap={82} mobileGap={20}>
          <ActorCard
            icon={dimark_actors_managers}
            title={"Shift Managers"}
            par={
              "Schedule and assign tasks generated by the system or create them on their own as a response to sudden occurences (malfunctions)."
            }
          />
          <ActorCard
            icon={dimark_actors_employees}
            title={"Employees"}
            par={
              "Complete tasks according to received instructions, reports sudden occurences (malfunctions)."
            }
          />
        </FlexRowContainer>
        <FlexRowContainer gap={82} mobileGap={20}>
          <ActorCard
            icon={dimark_actors_app}
            title={"Application"}
            par={
              "Contantly monitors maintenance cycles of devices within the system based on the data, creates tasks and notifications."
            }
          />
          <ActorCard
            icon={dimark_actors_airport}
            title={"Airport"}
            par={
              "Business customer who requires fulfilling of their requirements. Their satisfaction depends upon the effectiveness and satisfaction of the employees."
            }
          />
        </FlexRowContainer>
      </FlexContainer>
      <Title3 style={{ marginBottom: "14px" }}>User story map: Employee</Title3>
      <FullWidthImg src={dimark_storymap_employee} />
      <Title3 style={{ marginBottom: "14px" }}>
        User story map: Shift Manager
      </Title3>
      <FullWidthImg
        src={dimark_storymap_manager}
        style={{ marginBottom: "72px" }}
      />
      <FlexContainer gap={78} mobileGap={32} breakpoint={1300}>
        <CenterContainer style={{ marginBottom: "0px" }}>
          <SmallImg src={belt} alt="Conveyor belt" />
        </CenterContainer>

        <ColumnContainer>
          <Title3>Conclusion</Title3>
          <Paragraph>
            As it clearly can be seen our end users are not satisfied with the
            present processes which instead of making their work easier, just
            add additional ammount of paperwork. Moerover, workers often have
            issues with picking correct tools and parts needed to complete the
            task, and the manager often has issues with people, tasks and
            warehouse management.
          </Paragraph>
        </ColumnContainer>
      </FlexContainer>
      <Heading2 color={"rgba(255, 64, 0, 0.36)"} text={"Define"} />
      <Paragraph>
        Knowing the needs and concerns of users, I was able to compare them with
        the business requirements and I was able to consult them on technical
        possibilities with the team of developers.
      </Paragraph>
      <Paragraph />
      <Paragraph>
        The team could not resist from coming up with new features before the
        Ideate phase. However things not always go your way, sometimes there is
        a need to stop and review the processes within the team. To create a
        valuable product that really solves users' problems, each member of the
        team should be involved. Therefore I have decided to hold an offline
        workshop for my team to help everyone empathise with the user and at the
        same time find out why do we need the UX and UI.
      </Paragraph>
      <Title3 style={{ marginBottom: "24px" }}>Workshops</Title3>
      <FlexContainer
        gap={24}
        mobileGap={24}
        breakpoint={1300}
        style={{ marginBottom: "50px" }}
      >
        <CenterContainer style={{ marginBottom: "0px" }}>
          <FullWidthImg src={dimark_workshops_1} />
        </CenterContainer>
        <CenterContainer style={{ marginBottom: "0px" }}>
          <FullWidthImg src={dimark_workshops_2} />
        </CenterContainer>
      </FlexContainer>
      <Paragraph>
        Thanks to the stationary workshops we have increased the collective
        understanding of the users' needs. As the workshop task I have picked
        the 90minutes prototype challenge, to introduce my team into the world
        of research and testing as their task was to create paper prototypes of
        an application. To ensure approach not biased by their everyday work, it
        was decided by voting that the app that will be designed will be a
        medical app. I have split the team in two and took the role of a
        consultant myself. At the end of an intensive day we held a presentation
        of both solutions and conducted AB tests on other employees.
      </Paragraph>
      <Paragraph />
      <Paragraph style={{ marginBottom: "64px" }}>
        After getting to know the way of my team's thinking I went back to
        designing our app's processes. New concepts emerged together with a
        feature allowing to create and manage manuals within the system.The
        design of each feature involved design cycles including user-flow
        design, low and high fidelity wireframes. Each stage was either
        consulted with the team or tested based on available time and resources.
        Below are a couple of examples of such stages.
      </Paragraph>
      <Title3>Design Challenges</Title3>
      <FlexRowContainer gap={42} mobileGap={24}>
        <Icon src={dimark_actors_managers} />
        <Paragraph>
          Overview of upcoming tasks, assigning tasks to employees, controlling
          employee workload , managing warehouse and generating reports.
        </Paragraph>
      </FlexRowContainer>
      <FlexRowContainer gap={42} mobileGap={24}>
        <Icon src={dimark_actors_employees} />
        <Paragraph>
          Clear instructions for each service task, information adjusted to each
          task, elimination of paper reports..
        </Paragraph>
      </FlexRowContainer>

      <FlexRowContainer
        gap={42}
        mobileGap={24}
        style={{ marginBottom: "64px" }}
      >
        <Icon src={dimark_actors_airport} />
        <Paragraph style={{ marginLeft: "13px" }}>
          Access to the history of malfunctions and service tasks in order to
          monitor the quality of supplied devices. Simplifying the communication
          in case of warranty repairs.
        </Paragraph>
      </FlexRowContainer>
      <Heading2 color={"rgba(255, 64, 0, 0.56)"} text={"Ideate"} />
      <Paragraph>
        Having deeply understood all sides I have designed the flow to
        elliminate the key painpoints. Process became optimised, paper reports
        were eliminated and replaced with a report generator, task scheduling
        was simplified and paper manuals were replaced with interactive
        instructions displayed on a tablet.
      </Paragraph>
      <Paragraph />
      <Paragraph />
      <Paragraph style={{ marginBottom: "64px" }}>
        Afterwards, first prototypes of manager screen with a callendar started
        to appear. Figma was in constant use, I have been creating user flows,
        wireframes and hi-fi prototypes, iteration came after iteration and I
        consulted my ideas with team and business on online calls and workshops.
      </Paragraph>
      <Title3>New User story map: Employee</Title3>
      <FullWidthImg
        src={dimark_storymap_employee_new}
        style={{ marginBottom: "94px" }}
      />
      <Title3>New User story map: Shift Manager</Title3>
      <FullWidthImg
        src={dimark_storymap_manager_new}
        style={{ marginBottom: "94px" }}
      />
      <Title3 style={{ marginBottom: "24px" }}>Example use cases</Title3>
      <FullWidthImg
        src={dimark_usecases_legend}
        style={{ maxWidth: "50%", marginBottom: "64px" }}
      />
      <FlexContainer
        breakpoint={1200}
        gap={143}
        mobileGap={64}
        style={{ marginBottom: "94px" }}
      >
        <FullWidthImg src={dimark_usecases_1} style={{ maxWidth: "444px" }} />
        <FullWidthImg src={dimark_usecases_2} style={{ maxWidth: "444px" }} />
      </FlexContainer>
      <Heading2 color={"rgba(255, 64, 0, 0.56)"} text={"Prototyping"} />
      <Paragraph style={{ marginBottom: "64px" }}>
        Having deeply understood all sides I have designed the flow to
        elliminate the key painpoints. Process became optimised, paper reports
        were eliminated and replaced with a report generator, task scheduling
        was simplified and paper manuals were replaced with interactive
        instructions displayed on a tablet.
      </Paragraph>
      <Title3 style={{ marginBottom: "24px" }}>Report Generation</Title3>
      <Paragraph>
        Together with the team I have focused on providing the end user with
        possibly the largest freedom of choosing the data to be presented on the
        report as well as the filtering criteria. Based on the gathered data and
        business requirements I have designed the diagram of the process of
        report generation.
      </Paragraph>
      <FullWidthImg src={dimark_report_map} style={{ marginBottom: "64px" }} />
      <Title3 style={{ marginBottom: "24px" }}>Warehouse</Title3>
      <Paragraph style={{ marginBottom: "64px" }}>
        Warehouse is one of the key features, providing the manager with a way
        to keep track of all parts, part substitutes and tools needed for the
        daily work. Manager creates product cards to easily add or remove
        supplies. The warehouse feature monitors upcoming maintenance tasks and
        notifies manager about missing parts in advance.
      </Paragraph>
      <Title3 style={{ marginBottom: "24px" }}>
        Adding original resource flow
      </Title3>
      <FullWidthImg
        src={dimark_warehouse_map_1}
        style={{ marginBottom: "24px" }}
      />
      <Title3 style={{ marginBottom: "24px" }}>
        Adding substitute recource flow
      </Title3>
      <FullWidthImg
        src={dimark_warehouse_map_2}
        style={{ marginBottom: "24px" }}
      />
      <FlexContainer
        mobileGap={24}
        gap={54}
        breakpoint={992}
        style={{ marginBottom: "64px" }}
      >
        <HalfContainer>
          <FullWidthImg src={dimark_magazyn_lofi} />
        </HalfContainer>
        <HalfContainer>
          <FullWidthImg src={dimark_magazyn_hifi} />
        </HalfContainer>
      </FlexContainer>
      <Title3 style={{ marginBottom: "24px" }}>Manager Dashboards</Title3>
      <Paragraph>
        To streamline the control of the tasks in progress, sudden malfunctions
        and to assist in planning the work for employees, Shift Manager is
        provided with three types of dashboards: weekly, monthly and workflow
        (kanban).
      </Paragraph>
      <FlexContainer
        mobileGap={24}
        gap={54}
        breakpoint={992}
        style={{ marginBottom: "64px" }}
      >
        <HalfContainer>
          <FullWidthImg src={dimark_manager_dashboard_1} />
        </HalfContainer>
        <HalfContainer>
          <FullWidthImg src={dimark_manager_dashboard_2} />
        </HalfContainer>
      </FlexContainer>
      <Title3 style={{ marginBottom: "24px" }}>
        Employee dashboards &amp; instruction - tablet
      </Title3>
      <Paragraph>
        The employee can access tasks planned for them on the tablet. After
        accepting the task they are notified about the required parts and tools
        and where to find them in the warehouse. Afterwards employee is guided
        towards the device undergoing maintenance. The app guides the employee
        through each step of the repair. After completing the work, employee can
        document their work by taking a picture and writing a short note which
        is then presented to the manager.
      </Paragraph>
      <FlexContainer
        mobileGap={24}
        gap={54}
        breakpoint={992}
        style={{ marginBottom: "64px" }}
      >
        <HalfContainer>
          <FullWidthImg src={dimark_employee_view_1} />
        </HalfContainer>
        <HalfContainer>
          <FullWidthImg src={dimark_employee_view_2} />
        </HalfContainer>
      </FlexContainer>
      <Heading2 color={"rgba(255, 64, 0, 0.56)"} text={"Develop"} />
      <Paragraph>
        Project has been verified with the business and users, it has undergone
        an audit of compliance with the design which was conducted together with
        a front end developer. It’s currently being implemented and quantitative
        and qualitative data is being collected to assess the impact on end
        user’s work and the business.
      </Paragraph>
    </PageLayout>
  );
}

export default Dimark;

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
  @media (min-width: 768px) {
    width: 80%;
  }

  color: #1c1c1c;
`;

const FullWidthImg = styled.img`
  width: 100%;
  height: auto;
`;

const SmallImg = styled.img`
  max-width: 372px;
  height: auto;
`;

const Icon = styled.img`
  width: 68px;
  height: auto;
`;

const HalfContainer = styled.div`
  width: 100%;
  @media (min-width: 992px) {
    width: 50%;
  }
`;
