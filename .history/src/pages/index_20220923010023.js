import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import "@fontsource/cabin"


function Index(props) {
    const [text, setText] = useState('')
    const roles = ['UX/UI designer', 'UX Strategist']

    const typeFn = (str) => {
        const letters = str.split('')
        console.log(letters);
        for(let i = 0; i < str.length; i++){
            setTimeout(() => {setText((prevState) => prevState + letters[i])}, 1500)
        }
    }

    useEffect(() => {
        typeFn(roles[0])
    }, [])

return (
<Container><Head>
    <HelloText>
        Hello!
    </HelloText>
    <HeroText>
    I'm Jagoda, a{' '}
     {text}{' '}
     
     based in Krakow.
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