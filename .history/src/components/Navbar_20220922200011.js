import React from 'react';
import styled from 'styled-components';
import avatar from '../static/avatar.svg'

function Navbar(props) {
return (
<NavContainer>
    <NavWrapper>
    <ItemsWrapper>
        <img src={avatar}/>

    </ItemsWrapper>
    <ItemsWrapper>

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
