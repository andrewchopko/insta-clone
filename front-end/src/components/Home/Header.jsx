import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <MainHeader>
        <Container>
          <HeaderLogo>
            <Icon>
              <i width="40px" height="40px" className="fab fa-instagram" />
            </Icon>
            <Item>
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: "#454f5e",
                  fontWeight: "500"
                }}
              >
                Insta clone
              </Link>
            </Item>
          </HeaderLogo>
          <HeaderSearch>
            <HeaderSearchInput type="text" placeholder="пошук" />
          </HeaderSearch>
          <HeaderNav>
            <Icon>
              <Link to="/" style={{ textDecoration: "none", color: "#454f5e" }}>
                <i className="far fa-heart" />
              </Link>
            </Icon>
            <Icon>
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "#454f5e" }}
              >
                <i className="far fa-compass" />
              </Link>
            </Icon>

            <Icon>
              <Link
                to="/profile"
                style={{ textDecoration: "none", color: "#454f5e " }}
              >
                <i className="far fa-user" />
              </Link>
            </Icon>
          </HeaderNav>
        </Container>
      </MainHeader>
    );
  }
}

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 30px;
  color: gray;
`;
const MainHeader = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 77px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 3%;
  padding-right: 3%;
  font-size: 1.1em;
  font-family: "Krub", sans-serif;
  box-shadow: 0 2px 2px #e6e6e6;
  background: white;
  box-sizing: border-box;
`;
const Container = styled.section`
  display: flex;
  flex-direction: row;
  width: 61%;
  margin: auto;
  @media (max-width: 600px) {
    width: 98%;
  }
`;
const HeaderLogo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 33.3%;
  height: auto;
  margin: 0;
  color: #5d5f63;
  font-family: "Pacifico", cursive;
  background: white;
  box-sizing: border-box;
  @media (max-width: 600px) {
    width: 50%;
  }
`;
const HeaderSearch = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 33.3%;
  height: auto;
  margin: 0;
  background: white;
  box-sizing: border-box;
  @media (max-width: 600px) {
    display: none;
  }
`;
const HeaderSearchInput = styled.input`
  width: 200px;
  height: 25px;
  padding-left: 10px;
  margin: auto;
  font-size: 0.6rem;
  background: #fafafa;
  border: 1px solid #dbdbdb;
`;
const HeaderNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 33.3%;
  height: auto;
  margin: 0;
  margin-right: 10px;
  background: white;
  box-sizing: border-box;
  @media (max-width: 600px) {
    width: 50%;
  }
`;

const Item = styled.div`
  width: auto;
  height: auto;
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
  margin-left: 5px;
  color: black;
`;
export default Header;
