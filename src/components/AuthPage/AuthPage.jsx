import React, { Component } from "react";
import styled from "styled-components";
import IPhone from "../assets/apple.png";

export class AuthPage extends Component {
  render() {
    return <Wrapper>
        <Img src={IPhone} alt="Cover with IPhone" />
        <Container>
          <LogInCard>
            <Logo>Instagram</Logo>
            <Input placeholder="Username" />
            <Input placeholder="Password" />
            <Button>Log In</Button>
            <Div>Forgot password?</Div>
          </LogInCard>
          <SignUpCard>
            Don't have an account? <A>Sign Up</A>
          </SignUpCard>
          <GetApp>Get the App</GetApp>
          <AppIcons>
            <GetAppStore>Download on the AppStore</GetAppStore>
            <GetGooglePlayIcon>GET IT ON GOOGLE PLAY</GetGooglePlayIcon>
          </AppIcons>
        </Container>
        <Footer>
          <Ul>
            <Li>Anime</Li>
            <Li>Anime</Li>
            <Li>Anime</Li>
            <Li>Anime</Li>
            <Li>Anime</Li>
            <Li>Anime</Li>
            <Li>Anime</Li>
            <Li>Anime</Li>
          </Ul>
        </Footer>
      </Wrapper>;
  }
}
const A = styled.a`
  margin-left: 5px;
  color: blue;
  cursor: pointer;
`;

const Img = styled.img`
  width: 500px;
  height: 700px;
  position: relative;
  top: -20px;
  bottom: 10px;
  left: 20%;
  z-index: 3;
  @media (max-width: 700px) {
    display: none;
  }
`;
const Wrapper = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  height: 100%;
  margin: 0;
  background: #f7f9f6;
  font-family: "Krub", sans-serif;
  box-sizing: border-box;
  @media (max-width: 700px) {
    background: linear-gradient(136deg, #d3186e, #c301d3, #d39101);
    background-size: 600% 600%;

    -webkit-animation: AnimationName 11s ease infinite;
    -moz-animation: AnimationName 11s ease infinite;
    animation: AnimationName 11s ease infinite;

    @-webkit-keyframes AnimationName {
      0% {
        background-position: 0% 7%;
      }
      50% {
        background-position: 100% 94%;
      }
      100% {
        background-position: 0% 7%;
      }
    }
    @-moz-keyframes AnimationName {
      0% {
        background-position: 0% 7%;
      }
      50% {
        background-position: 100% 94%;
      }
      100% {
        background-position: 0% 7%;
      }
    }
    @keyframes AnimationName {
      0% {
        background-position: 0% 7%;
      }
      50% {
        background-position: 100% 94%;
      }
      100% {
        background-position: 0% 7%;
      }
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 90px;
  left: 50%;
  height: auto;
  box-sizing: border-box;
  z-index: 20;
  @media (max-width: 700px) {  
    margin: auto;
    width: 95%;
    top: 100px;
    left: 2.5%;
    height: auto;
    box-sizing: border-box;
    z-index: 20;
  }
`;
const LogInCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: auto;
  height: 300px;
  border-radius: 5px;
  box-shadow: 0px 1px 5px #c7c9cc;
  background: white;
  box-sizing: border-box;
`;
const Logo = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  height: 10%;
  padding: 5px;
  box-sizing: border-box;
`;
const Input = styled.input`
  width: 80%;
  padding: 10px;
  padding-left: 10px;
  padding-right: 20px;
  margin-top: 10px;
  outline: 0;
  border: 1.1px solid #d9dbd8;
  box-sizing: border-box;
  @media (max-width: 700px) {
    width: 80%;
    padding: 15px;
    padding-left: 10px;
    padding-right: 20px;
    margin-top: 10px;
  }
`;
const Button = styled.button`
  width: 80%;
  padding: 10px;
  padding-left: 10px;
  padding-right: 20px;
  margin-top: 10px;
  color: white;
  border: none;
  background: #3897f0;
  font-family: "Krub", sans-serif;
  box-sizing: border-box;
`;
const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  padding: 10px;
  padding-left: 10px;
  padding-right: 20px;
  margin-top: 5px;
  font-size: 0.7rem;
  @media (max-width: 700px) {
    margin-top: 10px;
  }
`;
const SignUpCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: auto;
  padding: 15px;
  margin-top: 10px;
  font-size: 0.8rem;
  box-shadow: 0px 1px 5px #c7c9cc;
  border-radius: 5px;
  background: white;
  box-sizing: border-box;
`;
const GetApp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: auto;
  margin-top: 30px;
  margin-bottom: 10px;
  font-size: 0.8rem;
  box-sizing: border-box;
  @media (max-width: 700px) {
    color: white;
  }
`;
const AppIcons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: auto;
  height: auto;
  padding: 15px;
  font-size: 0.8rem;
  box-sizing: border-box;
`;
const GetAppStore = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 49%;
  height: auto;
  padding: 10px;
  color: white;
  background: #676768;
  border: none;
  border-radius: 10px;
  font-size: 0.8rem;
  box-sizing: border-box;
  outline: none;
`;
const GetGooglePlayIcon = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 49%;
  height: auto;
  padding: 10px;
  color: white;
  background: #676768;
  border: none;
  border-radius: 10px;
  font-size: 0.8rem;
  box-sizing: border-box;
  outline: none;
`;
const Footer = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  bottom: 10px;
  width: 100%;
  height: 60px;
  @media (max-width: 700px) {
    display: none;
  }
`;
const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 70%;
  margin: auto;
  list-style: none;
  box-sizing: border-box;
`;
const Li = styled.li`
  display: inline;
  margin-left: 30px;
  /* border: 1px solid red; */
  box-sizing: border-box;
`;

export default AuthPage;