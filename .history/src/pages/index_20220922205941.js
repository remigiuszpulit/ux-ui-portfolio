import React from 'react';
import styled from 'styled-components';

function Index(props) {
return (
<Container><Head>
    <HelloText>
        Hello!
    </HelloText>
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
/* identical to box height */

text-align: center;

/* Black */

color: #161616;

`