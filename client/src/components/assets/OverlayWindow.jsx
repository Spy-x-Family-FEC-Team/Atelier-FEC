import React from "react";
import styled from "styled-components";

const OverlayBackground = styled.div`
position: fixed;
width: 100%;
height: 100%;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: rgba(0,0,0,0.7);
z-index: 10;
`;

const OverlayContentFrame = styled.div`
position: fixed;
padding: 5vh 3vw;
width: max-content;
max-width: 85vw;
height: max-content;
max-height: 85vh;
margin: auto;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: white;
z-index: 20;
overflow-y: auto;
border-radius: 7px;
`;

const OverlayWindow = ({children, onBgClick}) => (
  <>
    <OverlayBackground onClick={onBgClick}/>
    <OverlayContentFrame>
      {children}
    </OverlayContentFrame>
  </>
)

export default OverlayWindow;