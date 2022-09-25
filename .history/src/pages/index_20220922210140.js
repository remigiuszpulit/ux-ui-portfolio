import React from 'react';
import styled from 'styled-components';
import "@fontsource/cabin"


function Index(props) {
return (
<Container><Head>
    <HelloText>
        Hello!
    </HelloText>
    <HeroText>
    I'm Jagoda, a UX/UI designer based in Krakow.
    </HeroText>
    </Head></Container>
);
}

export default Index;

const Container = styled.section`
width: 63%;
`

const Head = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

const HelloText = styled.h1`
font-family: 'Kanit';
font-style: normal;
font-weight: 700;
font-size: 56px;
line-height: 84px;
text-align: center;
color: #161616;
`

const HeroText = styled.h2`
width: 381px;
height: 174px;
font-family: 'Cabin';
font-style: normal;
font-weight: 500;
font-size: 48px;
line-height: 58px;
text-align: center;
letter-spacing: 1.5px;
color: #161616;
`