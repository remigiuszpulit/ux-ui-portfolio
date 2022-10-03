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
        <Container />
      </PageLayout>
    </>
  );
}

export default Dimark;

const Container = styled.div`
  background: red;
  height: 100vh;
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
  line-height: 32px;
  /* or 229% */

  color: #000000;
`;
