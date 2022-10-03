import React from "react";
import PageHead from "../components/PageHead";

function Dimark(props) {
  return (
    <Page>
      <PageHead />
    </Page>
  );
}

export default Dimark;
const Page = styled.div`
  display: flex;
  justify-content: center;
  background-image: url(${Background});
`;
