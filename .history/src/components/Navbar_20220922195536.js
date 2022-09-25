import React from 'react';
import styled from 'styled-components';

function Navbar(props) {
return (
<NavContainer>Navbar</NavContainer>
);
}

export default Navbar;

const NavContainer = styled.nav`
height: 105px;
background: rgba(232, 228, 222, 0.01);
backdrop-filter: blur(3px);
position: sticky;
`