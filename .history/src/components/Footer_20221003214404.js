import React from "react";
import styled from "styled-components";

function Footer(props) {
  return (
    <Container>
      <Wrapper> </Wrapper>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  background: #161616;
  padding-top: 64px;
`;

const Wrapper = styled.div`
  width: 73%;
  display: flex;
  flex-direction: column;
`;
