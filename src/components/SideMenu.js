import React from "react";
import styled from "styled-components";

function SideMenu({ open, setOpen, children }) {
  return (
    <StyledMenu onClick={() => setOpen(!open)} open={open}>
      {" "}
      {children}{" "}
    </StyledMenu>
  );
}

export default SideMenu;

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  background: #effffa;
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-100%)")};

  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;

  transition: transform 0.3s ease-in-out;

  @media (max-width: 576px) {
    width: 100%;
  }
  a {
    margin-bottom: 15px;
  }
`;
