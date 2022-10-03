import React from "react";
import styled from "styled-components";
import BackgroundLight from "../static/BackgroundLight.png";
import PageHead from "../components/PageHead";

function PageLayout({ color, logo, head, par, children }) {
  return (
    <>
      <PageHead color={color} logo={logo} head={head} par={par} />
      <Page>
        <Container>{children}</Container>
      </Page>
    </>
  );
}

export default PageLayout;
const Page = styled.div`
  display: flex;
  justify-content: center;
  background-image: url(${BackgroundLight});
`;

const Container = styled.div`
  width: 73%;
`;
