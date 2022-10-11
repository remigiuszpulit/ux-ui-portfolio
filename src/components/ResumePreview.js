import React from "react";
import Modal from "react-modal";
import styled from "styled-components";
import Jagoda_Pulit_CV from "../static/Jagoda_Pulit_CV.pdf";
import x_icon from "../static/x_icon.svg";
import Loader from "./Loader";

function ResumePreview({ isOpen, setOpen }) {
  return (
    <StyledModal isOpen={isOpen}>
      <IconWrapper>
        <Icon onClick={() => setOpen(false)}>
          <img src={x_icon} alt="close" />
        </Icon>
      </IconWrapper>

      <object
        data={Jagoda_Pulit_CV}
        type="application/pdf"
        width="100%"
        height="80%"
        standby={<Loader color={"#161616"} />}
      >
        <p>Resume PDF</p>
      </object>
    </StyledModal>
  );
}

export default ResumePreview;

const StyledModal = styled(Modal)`
  width: 50%;
  height: 60vh;
  top: 0;
  bottom: 0;
  margin: auto;
  position: absolute;
  left: 0;
  right: 0;
  padding: 10px;
  background: white;
  backdrop-filter: blur(3px);
  border: 2px solid #161616;
  box-shadow: 3px 3px 0 0 #262c30;
`;

const IconWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const Icon = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  background: none;
  cursor: pointer;
  margin-bottom: 20px;
`;
