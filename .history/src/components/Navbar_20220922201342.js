import React from 'react';
import styled from 'styled-components';
import avatar from '../static/avatar.svg'
import LinkedinIcon from '../static/LinkedinIcon.svg'
import "@fontsource/kanit"


function Navbar(props) {
return (
<NavContainer>
    <NavWrapper>
    <ItemsWrapper>
        <img src={avatar}/>
        <LogoText>
        Jagoda Pulit-Pacanowska
        </LogoText>
    </ItemsWrapper>
    <ItemsWrapper>
    <a href='https://www.linkedin.com/in/jagoda-pulit/'>
        <img src={LinkedinIcon}/>
    </a>
    <ResumeButton>
    <ResumeButtonText>
    show resume
    </ResumeButtonText>
    </ResumeButton>
    </ItemsWrapper>

    </NavWrapper>
</NavContainer>
);
}

export default Navbar;

const NavContainer = styled.nav`
height: 105px;
background: rgba(232, 228, 222, 0.01);
backdrop-filter: blur(3px);
position: sticky;
display: flex;
justify-content: center;
`

const NavWrapper = styled.div`
width: 80%;
display: flex;
justify-content: space-between;
`
const ItemsWrapper = styled.div`
display: flex;
align-items: center;
`
const LogoText = styled.h3`
margin-left: 16px;
font-family: 'Kanit';
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 124%;
color: #161616;
`

const ResumeButton = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px;
background: #161616;
border-radius: 159px;
`

const ResumeButtonText = styled.h4`
font-family: 'Kanit';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 21px;
/* identical to box height */

text-transform: uppercase;

color: #FFFFFF;


/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
`