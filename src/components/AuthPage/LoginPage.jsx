import React, { Component } from "react";
import styled from "styled-components";
import IPhone from "../assets/apple.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { gettingLogInData } from "../../store/actions/loginAction";

export class LoginPage extends Component {
  state = {
    username: "",
    password: ""
  };

  handleInput = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleFormData = () => {
    this.props.gettingLogInData(this.state.username, this.state.password);
  };

  render() {
    return (
      <Wrapper>
        <Img src={IPhone} alt="Cover with IPhone" />
        <Container>
          <LogInCard>
            <Logo>Instagram</Logo>
            <Ann>Login in to Instagram so you can connect</Ann>
            <Input
              type="text"
              id="username"
              value={this.state.username}
              placeholder="Username"
              onChange={this.handleInput}
            />
            <Input
              type="password"
              id="password"
              value={this.state.password}
              placeholder="Password"
              onChange={this.handleInput}
            />
            <Button onClick={this.handleFormData}>Log In</Button>
            <Div>Forgot password?</Div>
          </LogInCard>
          <SignUpCard>
            Don't have an account?
            <A>
              <Link
                to="/signup"
                style={{ color: "#3294EA", fontWeight: "700" }}
              >
                Sign Up
              </Link>
            </A>
          </SignUpCard>
          {/* <GetApp>Get the App</GetApp>
          <AppIcons>
            <GetAppStore>Download on the AppStore</GetAppStore>
            <GetGooglePlayIcon>GET IT ON GOOGLE PLAY</GetGooglePlayIcon>
          </AppIcons> */}
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
      </Wrapper>
    );
  }
}
const A = styled.div`
  margin-left: 5px;
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
  background: #f2f2f2;
  font-weight: 500;
  font-family: "Krub", sans-serif;
  box-sizing: border-box;
  @media (max-width: 700px) {
    background: linear-gradient(to bottom right, #5b5368, #a43931);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  position: absolute;
  top: 100px;
  left: 50%;
  height: auto;
  box-sizing: border-box;
  z-index: 20;
  @media (max-width: 700px) {
    position: static;
    margin: auto;
    width: 96%;
    left: 0;
  }
`;
const LogInCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 30px;
  padding-bottom: 5px;
  border-radius: 5px;
  font-weight: 700;
  background: white;
  box-shadow: 1px 3px 10px #e2e2e2;
  box-sizing: border-box;
  @media (max-width: 700px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-top: 30px;
    padding-bottom: 5px;
    border-radius: 5px;
    font-weight: 700;
    box-shadow: none;
    background: transparent;
    box-sizing: border-box;
  }
`;
const Logo = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  height: 10%;
  padding-bottom: 10px;
  font-family: "Pacifico", cursive;
  font-size: 2rem;
  color: #454f5e;
  font-weight: 500;
  box-sizing: border-box;
  @media (max-width: 700px) {
    display: flex;
    justify-content: center;
    width: 80%;
    height: 10%;
    padding-bottom: 10px;
    font-family: "Pacifico", cursive;
    font-size: 2.5rem;
    color: white;
    box-sizing: border-box;
  }
`;
const Ann = styled.div`
  display: flex;
  width: auto;
  padding: 10px;
  margin-bottom: 15px;
  text-align: center;
  color: #6d6d6d;
  font-size: 0.8rem;
  font-weight: 550;
  @media (max-width: 700px) {
    display: flex;
    justify-content: center;
    width: 80%;
    height: 10%;
    padding-bottom: 10px;
    color: white;
    box-sizing: border-box;
  }
`;
const Input = styled.input`
  width: 80%;
  padding: 10px;
  padding-left: 10px;
  padding-right: 20px;
  margin-bottom: 20px;
  outline: 0;
  color: #454f5e;
  border-radius: 5px;
  background: transparent;
  border: 1.1px solid #e2e2e2;
  box-sizing: border-box;
  &::placeholder {
    color: #9f9f9f;
  }
  @media (max-width: 700px) {
    color: #e2e2e2;
    &::placeholder {
      color: #e2e2e2;
    }
  }
`;
const Button = styled.button`
  width: 80%;
  padding: 10px;
  padding-left: 10px;
  padding-right: 20px;
  color: white;
  border: none;
  background: #3294ea;
  font-family: "Krub", sans-serif;
  font-size: 1rem;
  box-sizing: border-box;
  outline: none;
  cursor: pointer;
  @media (max-width: 700px) {
    color: #e2e2e2;
    background: transparent;
  }
`;
const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  padding: 10px;
  padding-left: 10px;
  padding-right: 20px;
  margin-top: 15px;
  margin-bottom: 10px;
  font-size: 0.7rem;
  color: #6d6d6d;
  cursor: pointer;
  @media (max-width: 700px) {
    margin-top: 10px;
    color: #e2e2e2;
  }
`;
const SignUpCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: auto;
  margin-top: 15px;
  padding: 15px;
  color: #6d6d6d;
  font-size: 0.8rem;
  border-radius: 5px;
  background: white;
  box-shadow: 1px 3px 10px #e2e2e2;
  box-sizing: border-box;
  @media (max-width: 700px) {
    background: none;
    box-shadow: none;
    color: #e2e2e2;
  }
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

const mapStateToProps = state => {
  return {
    username: state.username,
    password: state.password
  };
};
const matchDispatchToProps = dispatch => {
  return bindActionCreators({ gettingLogInData: gettingLogInData }, dispatch);
};
export default connect(
  mapStateToProps,
  matchDispatchToProps
)(LoginPage);
