import React from "react";
import styled from "styled-components";

function FormInput({
  title,
  register,
  registerAs,
  isArea,
  isRequired,
  children,
  regexp,
}) {
  return (
    <Container>
      <Name htmlFor={registerAs}>{title}</Name>
      {isArea ? (
        <StyledArea
          {...register(`${registerAs}`, {
            required: isRequired,
            pattern: regexp,
          })}
        />
      ) : (
        <StyledInput
          {...register(`${registerAs}`, {
            required: isRequired,
            pattern: regexp,
          })}
        />
      )}
      {children}
    </Container>
  );
}

export default FormInput;

const Container = styled.div`
  width: 100%;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  outline: none;
  padding-left: 10px;
  border: 2px solid #262c30;
  width: 100%;
  margin-bottom: 8px;
  height: 34px;
  @media (min-width: 992px) {
    width: 50%;
    height: 42px;
  }
  transition: ease-in-out 0.1s;
  :focus-visible {
    border: 2px solid #e5257a;
  }
`;
const StyledArea = styled.textarea`
  outline: none;
  border: 2px solid #262c30;
  width: 100%;
  padding: 10px;
  margin-bottom: 8px;
  height: 242px;
  resize: none;
  :focus-visible {
    border: 2px solid #e5257a;
  }
`;

const Name = styled.label`
  font-family: "Kanit";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  margin: unset;
  line-height: 40px;
  /* identical to box height, or 200% */

  /* Black */

  color: #161616;
`;
