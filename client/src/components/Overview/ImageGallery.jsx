import React from 'react';
import styled from 'styled-components';

const StyledMainImageWrapper = styled.section`
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledMainImage = styled.img`
  max-height: 70vh;
  max-width: 100%;
`;


const ImageGallery = (props) => {

  return(
    <div>
      <StyledMainImageWrapper>
        <StyledMainImage src={props.currentImage}/>
      </StyledMainImageWrapper>
    </div>
  )
};

export default ImageGallery;
