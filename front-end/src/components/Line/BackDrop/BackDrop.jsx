import React from "react";
import styled from "styled-components";

function Backdrop(props) {
  return props.show ? <Styled_BackDrop onClick={props.clicked} /> : null;
}

const Styled_BackDrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 180;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  @media (max-width: 600px) {
    display: none;
  }
`;

export default Backdrop;
