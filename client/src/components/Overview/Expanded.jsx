import React, {useState} from 'react';
import styled from 'styled-components';

const StyledExpandedWrapper = styled.section`
  position: relative;
`;

const StyledCloseButton = styled.section`
  position:absolute;
  top:3px;
  right:3px;
`;

const StyledMainImageWrapper = styled.section`
  padding-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-axis:1;
  height:100%;
  width:100%
  position:absolute;
`;

const StyledExpandedImage = styled.img`
  max-height: 90vh;
  max-width: 100%;
  z-axis:1;
`;

const Expanded = (props) => {



  return(
    <StyledExpandedWrapper>
      <StyledCloseButton>
        <button
          onClick={props.toggleExpanded}
        >
          X
        </button>
      </StyledCloseButton>
      <StyledMainImageWrapper>
        <StyledExpandedImage
          src={props.currentImage}
        />
      </StyledMainImageWrapper>
    </StyledExpandedWrapper>
  );
};

export default Expanded;