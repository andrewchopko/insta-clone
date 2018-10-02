import React, { Component } from 'react';
import styled from "styled-components";

export class SignUpPage extends Component {
  
  state = { 
    chosen: true 
  };
  

  render() {
    return <Wrapper>
        <Container>
          <Logo>Instagram</Logo>
          <Div>Sign up to see photos and videos from your friends</Div>
          {this.state.chosen ? 
          <SignUp>
            <FacebookButton >Sign Up with Facebook</FacebookButton>
            <H1>OR</H1>
            <Button onClick={() => this.setState({ chosen: false })} >Sign Up with Phone or Email</Button>
          </SignUp>
          
          : 
          <SignUpCard>
            <Input type="email" placeholder="Email address" />
            <Input type="text" placeholder="Full name" />
            <Input type="text" placeholder="Username" />
            <Input type="password" placeholder="Password" />
            <Button>Sign Up</Button>
            <Div>By signing up, you agree to our Terms &amp; Privacy Policy</Div>
          </SignUpCard>}
          
        </Container>
      </Wrapper>;
  }
}

const Wrapper = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  margin: 0;
  background: linear-gradient(to bottom right, #5b5368, #a43931);
  font-family: "Krub", sans-serif;
  color: white;
  font-size: 2em;
  box-sizing: border-box;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 80px;
  width: 500px;
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
const SignUpCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 30px;
  padding-bottom: 30px;
  border-radius: 5px;
  font-weight: 700;
  background: transparent;
  box-sizing: border-box;
`;
const Logo = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 10%;
  padding: 5px;
  font-family: "Pacifico", cursive;
  text-align: center;
  box-sizing: border-box;
`;
const Div = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  color: #e2e2e2;
  font-size: 0.8rem;
  font-weight: 500;
  box-sizing: border-box;
  text-align: center;
  @media (max-width: 700px) {
    margin-top: 10px;
  }
`;
const Input = styled.input`
  width: 80%;
  padding: 10px;
  padding-left: 10px;
  padding-right: 20px;
  margin-bottom: 20px;
  outline: 0;
  color: #e2e2e2;
  border-radius: 5px;
  background: transparent;
  border: 1.1px solid #e2e2e2;
  box-sizing: border-box;
  &::placeholder {
    color: #e2e2e2;
  }
  @media (max-width: 700px) {
    width: 80%;
    padding: 15px;
    padding-left: 10px;
    padding-right: 20px;
    margin-top: 10px;
  }
`;

const SignUp = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
  margin-top: 150px;
  text-align: center;
  font-size: 0.8rem;
  font-weight: 550;
  box-sizing: border-box;
  @media (max-width: 700px) {
    margin-top: 10px;
  }
`;
const FacebookButton = styled.button`
  width: 100%;
  padding: 15px;
  padding-left: 10px;
  padding-right: 20px;
  margin: auto;
  margin-top: 10px;
  color: #3897f0;
  border: none;
  background: white;
  border-radius: 5px;
  font-family: "Krub", sans-serif;
  font-weight: 800;
  box-sizing: border-box;
  outline: none;
  cursor: pointer;
`;

const H1 = styled.h1`
  position: relative;
  z-index: 1;
  margin-top: 30px;
  margin-bottom: 30px;
  font-size: 0.6rem;
  overflow: hidden;
  color: #e2e2e2;
  text-align: center;
  &:before,
  &:after {
    content: "";
    display: inline-block;
    width: 100%;
    height: 1px;
    background: #e2e2e2;
    z-index: -1;
    position: relative;
    vertical-align: middle;
  }
  &:before {
    margin: 0 15px 0 -100%;
  }
  &:after {
    margin: 0 -100% 0 15px;
  }
`;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  padding-left: 10px;
  padding-right: 20px;
  margin: auto;
  color: #e2e2e2;
  border: none;
  background: transparent;
  border-radius: 5px;
  font-family: "Krub", sans-serif;
  font-weight: 800;
  box-sizing: border-box;
  outline: none;
  cursor: pointer;
`;


export default SignUpPage
