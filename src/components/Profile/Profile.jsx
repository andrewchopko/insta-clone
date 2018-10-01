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
              <Li>0 публикаций</Li>
              <Li>0 подписчики</Li>
              <Li>0 подписки</Li>
            </Ul>
            <RealName>Андрій Дідківський</RealName>
          </ProfileContainer>
        </User>
        <Bar>
          <PublicsBar>
            <Ul>
              <Li>Публикаций</Li>
              <Li>IGTV</Li>
              <Li>Сохранено</Li>
              <Li>Отметки</Li>
            </Ul>
          </PublicsBar>
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
  height: 200px;
  margin: auto;
  margin-top: 55px;
`;
const ProfileImg = styled.div`
  display: flex;
  width: 150px;
  height: 150px;
  margin-top: 0;
  margin-left: 55px;
  border-radius: 50%;
  border: 2px solid gray;
`;
const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  height: auto;
  margin-left: 100px;
  font-size: 1.5rem;
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
  font-family: "Krub", sans-serif;
`;
const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: auto;
  height: 30px;
  margin: 0;
  padding: 0;
  list-style: none;
`;
const Li = styled.li`
  display: inline;
  width: auto;
  height: auto;
  margin-right: 40px;
  padding-top: 10px;
  font-size: 0.9rem;
  cursor: pointer;
  &:hover {
    border-top: 1px solid #8D8D8D;
  }
`;
const RealName = styled.div`
  display: flex;
  width: auto;
  height: auto;
  margin-top: 30px;
  font-size: 0.9rem;
`;

const Bar = styled.div`
  display: flex;
  width: 60%;
  height: auto;
  margin: auto;
  margin-top: 15px;
  border-top: 1px solid #f4f4f4;
`;
const PublicsBar = styled.div`
  display: flex;
  width: 60%;
  height: 30px;
  margin: auto;
  margin-bottom: 1000px;
  padding-left: 50px;
`;

export default Profile;
