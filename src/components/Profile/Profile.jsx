import React, { Component } from "react";
import Header from "../Home/Header";
import styled from "styled-components";

export class Profile extends Component {
  render() {
    return <Wrapper>
        <Header />
        <User>
          <ProfileImg />
          <ProfileContainer>
            <NameAndEdit>
              <ProfileName>dorreharay</ProfileName>
              <ProfileEdit>Редактировать профиль</ProfileEdit>
            </NameAndEdit>
            <Ul>
              <LiS>0 публикаций</LiS>
              <LiS>0 подписчики</LiS>
              <LiS>0 подписки</LiS>
            </Ul>
            <RealName>Андрій Дідківський</RealName>
          </ProfileContainer>
        </User>
        <Bar>
          <PublicsBar>
              <Li>Публикаций</Li>
              <Li>IGTV</Li>
              <Li>Сохранено</Li>
              <Li>Отметки</Li>
          </PublicsBar>
          <Content>
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
          </Content>
        </Bar>
      </Wrapper>;
  }
}
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #FAFAFA;
  font-family: "Krub", sans-serif;
`;
const User = styled.div`
  display: flex;
  width: 60%;
  height: auto;
  margin: auto;
  margin-top: 25px;
  @media (max-width: 700px) {
    width: 95%;
    display: flex;
    flex-direction: column;
  }
`;
const ProfileImg = styled.div`
  display: flex;
  width: 150px;
  height: 150px;
  margin-top: 0;
  margin-left: 100px;
  border-radius: 50%;
  border: 1.5px solid #5d5f63;
  @media (max-width: 700px) {
    margin: auto;
  }
`;
const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: auto;
  height: auto;
  margin-left: 100px;
  font-size: 1.5rem;
  @media (max-width: 700px) {
    margin-left: 0px;
    width: 90%;
    margin: auto;
    margin-top: 20px;
  }
`;
const NameAndEdit = styled.div`
  display: flex;
  width: auto;
  height: 50px;
  font-size: 1.5rem;
`;
const ProfileName = styled.div`
  display: flex;
  width: auto;
  height: auto;
  margin-top: 10px;
  font-size: 1.5rem;
`;
const ProfileEdit = styled.button`
  display: flex;
  width: auto;
  height: 30px;
  background: #fafafa;
  border: 1px solid #dbdbdb;
  padding-left: 15px;
  padding-right: 15px;
  margin-top: 10px;
  margin-left: 20px;
  border-radius: 5px;
  font-size: 0.7rem;
  outline: none;
  cursor: pointer;
  font-family: "Krub", sans-serif;
`;
const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: auto;
  height: auto;
  margin: 0;
  padding: 0;
  list-style: none;
  @media (max-width: 700px) {
    margin-top: 10px;
  }
`;
const LiS = styled.li`
  display: inline;
  width: auto;
  height: auto;
  margin-right: 40px;
  padding-top: 10px;
  font-size: 0.9rem;
  transition: 0.3s;
  border-top: 1px solid transparent;
  cursor: pointer;
`;
const RealName = styled.div`
  display: flex;
  width: auto;
  height: auto;
  margin-top: 20px;
  font-size: 1rem;
  @media (max-width: 700px) {
    display: none;
  }
`;

const Bar = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: auto;
  margin: auto;
  margin-top: 15px;
  border-top: 1px solid #f4f4f4;
  @media (max-width: 700px) {
    width: 95%;
  }
`;
const PublicsBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  height: 30px;
  margin: auto;
  @media (max-width: 700px) {
    width: 90%;
    margin-top: 50px;
  }
`;
const Li = styled.div`
  display: flex;
  width: auto;
  height: auto;
  margin: auto;
  padding-top: 10px;
  font-size: 0.9rem;
  transition: 0.3s;
  border-top: 1px solid transparent;
  cursor: pointer;
  &:hover {
    transition: 0.3s;
    border-top: 1px solid #8d8d8d;
  }
`;
const Content = styled.div`
  display: grid;
  width: 100%;
  height: auto;
  margin: auto;
  margin: auto;
  margin-top: 40px;
  margin-bottom: 40px;
  background: transparent;
  grid-gap: 20px;
  grid-template-columns: 3fr 3fr 3fr;
  grid-template-rows: repeat(1, 300px);
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`;
const Item = styled.img`
  width: 100%;
  height: 300px;
  background: white;
  @media (max-width: 700px) {
    margin-bottom: 10px;
  }
`;


export default Profile;
