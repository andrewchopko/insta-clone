import React from "react";
import styled from "styled-components";

function Comment(props) {
  return (
    <Item>
      <Profile_name>{props.name}</Profile_name>
      <StyledCom>{props.item}</StyledCom>
    </Item>
  );
}

const Item = styled.div`
  width: auto;
  height: 20px;
  color: black;
  display: flex;
`;
const StyledCom = styled.p`
  font-size: 0.8em;

  margin-left: 7px;
`;

const Profile_name = styled.p`
  font-size: 0.8em;
  font-weight: bold;
  margin-left: 7px;
`;

export default Comment;
