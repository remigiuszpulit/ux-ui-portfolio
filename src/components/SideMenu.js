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
  height: 200px;
  background: rgba(232, 228, 222, 0.95);
  backdrop-filter: blur(3px);
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;

  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-100%)")};
  z-index: -400;
  text-align: left;
  padding-top: 45px;
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
