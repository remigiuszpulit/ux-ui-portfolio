import React, { useRef } from "react";
import styled from "styled-components";
import BackgroundLight from "../static/BackgroundLight.png";
import PageHead from "../components/PageHead";
import Footer from "./Footer";

const PageLayout = ({ color, logo, head, par, children }) => {
  const ref = useRef(null);
  return (
    <>
      <PageHead ref={ref} color={color} logo={logo} head={head} par={par} />
      <Page>
        <Container>{children}</Container>
      </Page>
      <Footer color={color} to={ref} />
    </>
  );
};

export default PageLayout;
const Page = styled.div`
  display: flex;
  justify-content: center;
  background-image: url(${BackgroundLight});
`;

const Container = styled.div`
  width: 73%;
  @media (min-width: 992px) {
    width: 53%;
  }
  padding-top: 40px;
  padding-bottom: 100px;
`;
