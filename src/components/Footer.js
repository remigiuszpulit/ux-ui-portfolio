import React from "react";
import styled from "styled-components";
import ArrowUp from "./ArrowUp";

function Footer({ color, to }) {
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
          color={color}
          onClick={() => to.current.scrollIntoView({ behavior: "smooth" })}
        >
          <ArrowUp color={color} />
          <ButtonText id="buttonText">Back to top</ButtonText>
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

const Button = styled.a`
  display: flex;
  flex-direction: row;
  width: 123px;
  height: 41px;
  cursor: pointer;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  align-items: center;
  text-decoration: none;
  ${({ color }) => `
  border: 2px solid ${color};
  box-shadow: 3px 3px 0 0 ${color};
  `}
  border-radius: 2px;
  transition: background-color 200ms cubic-bezier(0.637, 0.358, 0.175, 0.878);
  background-color: #fff;

  :hover {
    box-shadow: none;
    background-color: #161616;
    transform: translate(2px, 2px);
    #buttonText {
      color: white;
    }
  }
`;

const ButtonText = styled.h4`
  font-family: "Kanit";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  color: #161616;

  /* identical to box height */

  text-transform: uppercase;

  flex: none;
  order: 0;
  flex-grow: 0;
`;
