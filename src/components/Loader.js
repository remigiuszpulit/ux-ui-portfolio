import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
import BackgroundLight from "../static/BackgroundLight.png";
import { motion, AnimatePresence } from "framer-motion";

function Loader({ color }) {
  return (
    <AnimatePresence>
      <motion.div
        key={"loader"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <Container>
          <Ring color={color}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </Ring>
        </Container>
      </motion.div>
    </AnimatePresence>
  );
}

export default Loader;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${BackgroundLight});
`;

const RingAnimation = keyframes`
    0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Ring = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    ${({ color }) => `
     border: 8px solid ${color};
     border-color: ${color} transparent transparent transparent;
    `}
    border-radius: 50%;
    animation: ${RingAnimation} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  }
  div:nth-child(1) {
    animation-delay: -0.45s;
  }
  div:nth-child(2) {
    animation-delay: -0.3s;
  }
  div:nth-child(3) {
    animation-delay: -0.15s;
  }
`;
