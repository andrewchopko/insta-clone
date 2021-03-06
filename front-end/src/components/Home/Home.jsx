import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Header from "./Header";
import Line from "../Line/Line";

class Home extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <Line />
      </Wrapper>
    );
  }
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  background: #fafafa;
  font-family: "Krub", sans-serif;
`;
const Text = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  margin-bottom: 1000px;
`;

const mapStateToProps = state => {
  return {
    list: state.list
  };
};

const mapDispatchToProps = dispatch => {
  return {
    someAction: () => {
      dispatch({ type: "SOME_ACTION" });
    }
  };
};
export default Home;
