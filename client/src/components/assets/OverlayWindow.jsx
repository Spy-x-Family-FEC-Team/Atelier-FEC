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
background-color: rgba(0,0,0,0.7);d
z-index: 10;
`;

const OverlayContentFrame = styled.div`
position: fixed;
max-width: 90%;
max-height: 90%;
margin: auto;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: white;
z-index: 20;
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