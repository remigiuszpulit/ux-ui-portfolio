import React from "react";
import PageHead from "../components/PageHead";
import styled from "styled-components";
import grafika_dimark from "../static/grafika_dimark.svg";

const headParagraph =
  "My task was to get to know the users, their problems and to design a solution that would streamline the maintenance procedures of the devices. The tool I have designed is available for desktop and tablet (taking into account that users often wear gloves and use the tablet in difficult surroundings). The design process has undergone multiple iterations to deliver a solution that would fit within the needs of various stakeholders like the airport (customer), end users and internal stakeholders within Dimark.";

function Dimark(props) {
  return (
    <>
      <PageHead
        color={"#F05A28"}
        logo={grafika_dimark}
        head={"Dimark IT"}
        par={headParagraph}
      />
      <Page></Page>
    </>
  );
}

export default Dimark;
const Page = styled.div`
  display: flex;
  justify-content: center;
`;
