import React from "react";
import styled from "styled-components";
import "@fontsource/cabin";
import ReactTypingEffect from "react-typing-effect";
import GoldPlace from "../static/GoldPlace.png";
import DimarkCover from "../static/DimarkCover.png";
import Background from "../static/Background.png";
import Card from "../components/Card";

function Index(props) {
  const roles = [
    "UX/UI designer",
    "Product Designer",
    "UX Strategist",
    "Team Player",
    "UX Researcher",
  ];

  return (
    <Page>
      <Container>
        <Head>
          <HelloText>Hello!</HelloText>
          <HeroText>
            <Text>I'm Jagoda, a</Text>
            <ReactTypingEffect
              text={roles}
              speed={50}
              eraseSpeed={50}
              typingDelay={300}
              eraseDelay={1000}
            />
            <Text> based in Krakow.</Text>
          </HeroText>
        </Head>
        <CardsContainer>
          <Card
            img={DimarkCover}
            head={"Dimark"}
            text={
              "Dimark specializes in designing, production, installing, launching and  maintaining baggage handling systems and intralogistics solutions."
            }
          />
          <Card
            img={GoldPlace}
            head={"Gold Place"}
            text={
              "The company enables entrepreneurs to lower their administrative costs and run the business more efficiently."
            }
          />
        </CardsContainer>
      </Container>
    </Page>
  );
}

export default Index;

const Page = styled.div`
  display: flex;
  justify-content: center;
  background-image: url(${Background});
`;

const Container = styled.section`
  width: 73%;
  margin-top: 200px;
  @media (min-width: 768px) {
    margin-top: 105px;
  }
`;
const CardsContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const Head = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 90px;
`;

const HelloText = styled.h1`
  font-family: "Kanit";
  font-style: normal;
  font-weight: 700;
  font-size: 56px;
  text-align: center;
  margin: unset;
  color: #161616;
`;

const HeroText = styled.h2`
  width: 400px;
  font-family: "Cabin";
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  text-align: center;
  margin: unset;
  letter-spacing: 1.5px;
  color: #161616;
`;

const Text = styled.p`
  margin: unset;
`;
