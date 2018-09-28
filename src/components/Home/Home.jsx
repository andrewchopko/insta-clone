import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

export class Home extends Component {
  render() {
    return (
      <Header>
        <Item>shitty insta app</Item>
        <Item>anime</Item>
        <Item>anime</Item>
        <Item>anime</Item>
        <Item>anime</Item>
      </Header>
    );
  }
}

const Header = styled.p`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  margin: 0;
  margin-left: 10px;
  margin-top: 10px;
  font-size: 1.3em;
  background: white;
`;

const Item = styled.section`
  width: auto;
  height: auto;
  margin-left: 15px;
  padding: 5px;
  border: 1.5px solid red;
  color: black;
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
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
