import React, {useState} from 'react';
import styled, {css} from 'styled-components';

const StyledMagnifiedWindow = styled.section`
position:relative;
height:90vh;
width:90vh;
`;

const StyledCloseButton = styled.section`
position:absolute;
top:3px;
right:3px;
cursor:pointer;
`;

const StyledImageWrapper = styled.section`
display: flex;
align-items: center;
justify-content: center;
cursor:zoom-out;
height:100%;
width:100%
position:absolute;
${(props) => (css`
  background-image:url("${props.currentImage}");
`)}
`;
//overflow:overlay;
//  background-position:${}

const StyledMagnifiedImage = styled.img`
height: 300%;
width: 300%;
`;


const Magnified = (props) => {


  return (
    <StyledMagnifiedWindow     className="StyledMagnifiedWindow">
      <StyledCloseButton>
        <button
          onClick={props.toggleMagnified}
        >
          X
        </button>
      </StyledCloseButton>
      <StyledImageWrapper
          className="StyledImageWrapper"
          currentImage={props.currentImage}
          onClick={props.toggleMagnified}
      />
    </StyledMagnifiedWindow>
  )
};

export default Magnified;