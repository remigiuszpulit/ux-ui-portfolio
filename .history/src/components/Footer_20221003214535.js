import React from "react";
import styled from "styled-components";

function Footer({ color }) {
  return (
    <Container>
      <Wrapper>
        <Text>
          If you want to get to know more about the details of the processes I
          have designed or want to find out about other projects I have been
          working on, feel free to reach out to me, I’ll be happy to tell you
          more ;)
        </Text>
      </Wrapper>
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

const Text = styled.p`
  font-family: "Cabin";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 128%;
  /* or 20px */

  color: #ffffff;
`;
