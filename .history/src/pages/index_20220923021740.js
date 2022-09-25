import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import "@fontsource/cabin"
import ReactTypingEffect from 'react-typing-effect';



function Index(props) {
    // const [text, setText] = useState('')
    const roles = ['UX/UI designer', 'UX Strategist']

    // function updateState(letters){
    //     for(let i = 0; i < letters.length; i++){
    //     setTimeout(() => {setText((prevState) => prevState + letters[i])}, i * 150)
    //     }
    //     setTimeout(() => {
    //         for(let i = 1; i <= letters.length; i++){
                
    //             setTimeout(() => {setText((prevState) =>  { console.log(i, prevState,  letters.at(-i)); 
    //                 const split = prevState.split('')
    //                 const popped = split.pop()
    //                 return split.join('')}  )}, (i * 150) + 200)
    //             }
    //     }, 2500)
    // }


    // const typeFn = async (str) => {
    //     const letters = str.split('')
    //     console.log(letters);
    //        updateState(letters)
    // }

    // useEffect(() => {
    //     for(let i = 0; i < roles.length; i++){
    //         setTimeout(() => typeFn(roles[i]), i*5000 )
    //     }
    // }, [])

return (
<Container><Head>
    <HelloText>
        Hello!
    </HelloText>
    <HeroText>
    <Text>I'm Jagoda, a</Text>
    <ReactTypingEffect text={roles} speed={50}/>
    <Text> based in Krakow.</Text>
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

const Text = styled.p`
margin: unset;
`