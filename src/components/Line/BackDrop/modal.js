import React from 'react';
import styled from 'styled-components'
import Backdrop from "./BackDrop";

const Modal_c = styled.div`

    position: fixed;
    z-index: 500;
    background-color: white;
    width: 70%;
    border: 1px solid #ccc;
    box-shadow: 1px 1px 1px black;
    padding: 16px;
    left: 15%;
    top: 15%;
    box-sizing: border-box;
    transition: all 0.3s ease-out;


 @media (max-width: 600px) {
display: none              
}
    


`

 const Modal =  (props)=> (
    <div>
        <Backdrop show={props.show} clicked={props.backdrop} />
        <Modal_c style={{

            display: props.show ? 'block' : 'hidden'
        }}>
            {props.children}
        </Modal_c>
    </div>

)

export default Modal
