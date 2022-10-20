import React, { useReducer, useState } from "react";
import FormInput from "../components/FormInput";
import PageLayout from "../components/PageLayout";
import Background from "../static/Background.png";

import { useForm } from "react-hook-form";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import Snackbar from "../components/Snackbar";
import Footer from "../components/Footer";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const InitialSnackbarState = {
    isActive: false,
    message: "Your message has been sent successfully!",
    isError: false,
  };

  function reducer(state, action) {
    switch (action.type) {
      case "activateSuccess":
        return {
          message: "Your message has been sent successfully!",
          isActive: true,
          isError: false,
        };
      case "activateError":
        return {
          message: "Ooops! Something went wrong",
          isActive: true,
          isError: true,
        };
      case "deactivate":
        return { ...state, isActive: false };
      default:
        throw new Error();
    }
  }

  const [disabled, setDisabled] = useState(false);

  const [snackbarState, dispatch] = useReducer(reducer, InitialSnackbarState);

  const closeSnackbar = () => dispatch({ type: "deactivate" });

  const onSubmit = (data) => {
    setDisabled(true);
    emailjs
      .send("service_3pyaebb", "template_bn36y5b", data, "J46SM3IlR0HoeME9X")
      .then(
        (result) => {
          setDisabled(true);
          dispatch({ type: "activateSuccess" });
          setTimeout(() => dispatch({ type: "deactivate" }), 5000);
        },
        (error) => {
          dispatch({ type: "activateError" });
          setTimeout(() => dispatch({ type: "deactivate" }), 5000);
        }
      );
  };
  return (
    <>
      <Page>
        <Container>
          <Head>
            <HelloText>Save my email</HelloText>
            <HeroText>jagoda.pulit@gmail.com</HeroText>
            <Text> Or just drop me a message via the form below</Text>
          </Head>
          <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <FormInput
              title={"Your Name"}
              defaultValue="test"
              register={register}
              registerAs={"name"}
              isRequired
            >
              {errors.name ? <span>This field is required</span> : <span />}
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
            <SubmitButton type="submit" disabled={disabled}>
              <SubmitButtonText id="buttonText">Send</SubmitButtonText>
            </SubmitButton>
          </StyledForm>
        </Container>
      </Page>
      <Snackbar
        isError={snackbarState.isError}
        isActive={snackbarState.isActive}
        message={snackbarState.message}
        closefn={closeSnackbar}
      />
    </>
  );
}

export default Contact;

const Page = styled.div`
  display: flex;
  justify-content: center;
  background-image: url(${Background});
  background-size: 350px;
  background-repeat: repeat;
`;

const Container = styled.section`
  width: 83%;
  margin-top: 85px;
  padding-bottom: 85px;
  @media (min-width: 768px) {
    margin-top: 105px;
    width: 40%;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const Head = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 24px;
  @media (min-width: 992px) {
    margin-bottom: 48px;
  }
`;

const HelloText = styled.h1`
  font-family: "Kanit";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  @media (min-width: 992px) {
    font-size: 56px;
  }

  text-align: center;
  margin: unset;
  margin-bottom: 13px;
  color: #161616;
`;

const HeroText = styled.h2`
  font-family: "Cabin";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  @media (min-width: 992px) {
    font-size: 48px;
  }
  text-align: center;
  margin: unset;
  margin-bottom: 42px;
  letter-spacing: 1.5px;
  color: #161616;
`;

const Text = styled.p`
  margin: unset;
  font-family: "Kanit";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  /* identical to box height */

  color: #000000;
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
  ${({ disabled }) =>
    disabled &&
    `background-color: #262c30;
    box-shadow: none;
    transform: translate(2px, 2px);
    #buttonText {
      color: lightgray;
    }
  :hover {
    box-shadow: none;
    background-color: #262c30;
    transform: translate(2px, 2px);
    #buttonText {
        color: lightgray;
    }
  `}
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
