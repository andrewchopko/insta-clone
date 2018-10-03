import React, { Component } from 'react';
import styled from 'styled-components';


const Panl = styled.div`
width: 15%;
position: absolute;
top: -70px;
right: 250px;
margin-top: 200px;
height : 70px;
border: none;
border-bottom: 1px solid #e6e6e6;
display:flex;
align-items: center;
@media (max-width: 600px){
display : none;
}

`
const Profile_img = styled.div`
background-color: grey;
 height: 45px;
 width: 45px;
 
border-radius: 50%;
border: 1px solid #e6e6e6; 
`;
const Text = styled.div`
  height: 40px;
  display: flex;
  flex-flow: column;
  margin: 0;
  margin-left: 10px;
  margin-top: 8px;
  font-size: 0.8rem;
`;
const Account = styled.p`
font-size: .9em;
font-weight: bold;
margin: 0;
padding: 0;
`
const Name = styled.p`
  font-size: 0.6em;
  padding: 0;
  color: #999999;
  margin-left: 0;
  margin-top: 3px;
`;


const Panel = (props) => (

        <Panl>
            <Profile_img/>
            <Text>
                <Account>{props.name}</Account>
                <Name>Name surname</Name>
            </Text>
        </Panl>

)


export default Panel;
