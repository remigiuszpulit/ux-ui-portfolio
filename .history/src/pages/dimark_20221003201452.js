import React from "react";
import PageHead from "../components/PageHead";
import styled from "styled-components";
import grafika_dimark from "../static/grafika_dimark.svg";

function Dimark(props) {
  return <PageHead color={"#F05A28"} logo={grafika_dimark} />;
}

export default Dimark;
const Page = styled.div`
  display: flex;
  justify-content: center;
`;
