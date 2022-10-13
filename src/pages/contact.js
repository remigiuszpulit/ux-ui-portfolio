import React from "react";
import FormInput from "../components/FormInput";
import PageLayout from "../components/PageLayout";
import email_icon from "../static/email_icon.svg";
import { useForm } from "react-hook-form";
import styled from "styled-components";

function Contact(props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <PageLayout
      color={"#2DAAE2"}
      head={"Contact me"}
      par={
        "If you want to get to know more about the details of the processes I have designed or want to find out about other projects I have been working on, feel free to reach out to me, I’ll be happy to tell you more ;)"
      }
    >
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          title={"Your Name"}
          defaultValue="test"
          register={register}
          registerAs={"name"}
          isRequired
        >
          {errors.name ? (
            <span>Please provide a valid email adress</span>
          ) : (
            <span />
          )}
        </FormInput>
        <FormInput
          title={"Your Email Adress"}
          defaultValue="test"
          register={register}
          registerAs={"email"}
          isRequired
          regexp={/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g}
        >
          {errors.email ? (
            <span>Please provide a valid email adress</span>
          ) : (
            <span />
          )}
        </FormInput>
        <FormInput
          title={"Your Message"}
          defaultValue="test"
          register={register}
          registerAs={"message"}
          isArea
          isRequired
        >
          {errors.message ? <span>This field is required</span> : <span />}
        </FormInput>
        <SubmitButton type="submit">
          <SubmitButtonText id="buttonText">Send</SubmitButtonText>
        </SubmitButton>
      </StyledForm>
    </PageLayout>
  );
}

export default Contact;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const SubmitButton = styled.button`
  display: flex;
  flex-direction: row;
  width: 163px;
  height: 41px;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border: 2px solid #262c30;
  border-radius: 2px;
  transition: background-color 200ms cubic-bezier(0.637, 0.358, 0.175, 0.878);
  background-color: #fff;
  box-shadow: 3px 3px 0 0 #262c30;
  :hover {
    box-shadow: none;
    background-color: #161616;
    transform: translate(2px, 2px);
    #buttonText {
      color: white;
    }
  }
`;

const SubmitButtonText = styled.h4`
  font-family: "Kanit";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  color: #161616;

  /* identical to box height */

  text-transform: uppercase;

  flex: none;
  order: 0;
  flex-grow: 0;
`;
