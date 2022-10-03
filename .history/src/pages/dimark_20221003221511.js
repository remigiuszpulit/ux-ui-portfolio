import React from "react";
import styled from "styled-components";
import grafika_dimark from "../static/grafika_dimark.svg";
import PageLayout from "../components/PageLayout";

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
            <Title3>My role - UX/UI Designer</Title3>
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
          <ColumnContainer>
            <Title3>Date</Title3>
            <TextListStyle>April 2021 - April 2022</TextListStyle>
          </ColumnContainer>
        </FlexContainer>
      </PageLayout>
    </>
  );
}

export default Dimark;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title3 = styled.h3`
  font-family: "Kanit";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
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
  /* or 229% */

  color: #000000;
`;
