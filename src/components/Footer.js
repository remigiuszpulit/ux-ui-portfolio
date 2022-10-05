import React from "react";
import styled from "styled-components";
import ArrowUp from "./ArrowUp";

function Footer({ color, to }) {
  console.log(to);
  return (
    <Container>
      <Wrapper>
        <Text>
          If you want to get to know more about the details of the processes I
          have designed or want to find out about other projects I have been
          working on, feel free to reach out to me, I’ll be happy to tell you
          more ;)
        </Text>
        <Button
          onClick={() => to.current.scrollIntoView({ behavior: "smooth" })}
        >
          <ArrowUp color={color} />
          <ButtonText>Back to top</ButtonText>
        </Button>
      </Wrapper>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  background: #161616;
  padding-top: 64px;

  padding-bottom: 54px;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 73%;
  @media (min-width: 992px) {
    width: 53%;
  }
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

const Button = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const ButtonText = styled.span`
  font-family: "Kanit";
  font-style: normal;
  font-weight: 600;
  margin-left: 9px;
  font-size: 20px;
  line-height: 30px;
  /* identical to box height */

  color: #ffffff;
`;
