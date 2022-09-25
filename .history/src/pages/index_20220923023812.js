import React from 'react';
import styled from 'styled-components';
import "@fontsource/cabin"
import ReactTypingEffect from 'react-typing-effect';
import GoldPlace from '../static/GoldPlace.png'
import Card from '../components/Card';


function Index(props) {
    const roles = ['UX/UI designer', 'UX Strategist']

return (
    <>
    <Container><Head>
    <HelloText>
        Hello!
    </HelloText>
    <HeroText>
    <Text>I'm Jagoda, a</Text>
    <ReactTypingEffect text={roles} speed={150} eraseSpeed={150}/>
    <Text> based in Krakow.</Text>
    </HeroText>
    </Head>
    </Container>
    <CardsContainer>
    <Card img={GoldPlace} head={'Gold Place'} text={'The company enables entrepreneurs to lower their administrative costs and run the business more efficiently.'}/>

    </CardsContainer>
    


    </>

);
}

export default Index;

const Container = styled.section`
width: 63%;
margin-bottom: 90px;
margin-top: 105px;
`
const CardsContainer = styled.section`
width: 63%;
display: flex;
`

const Head = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`

const HelloText = styled.h1`
font-family: 'Kanit';
font-style: normal;
font-weight: 700;
font-size: 56px;
text-align: center;
margin: unset;
color: #161616;
`

const HeroText = styled.h2`
width: 381px;
font-family: 'Cabin';
font-style: normal;
font-weight: 500;
font-size: 48px;
text-align: center;
margin: unset;
letter-spacing: 1.5px;
color: #161616;
`

const Text = styled.p`
margin: unset;
`