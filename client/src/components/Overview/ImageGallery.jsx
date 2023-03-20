import React from 'react';
import styled from 'styled-components';

const StyledMainImage = styled.img`
  max-height: 70vh;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
// A lot of the style stuff above is redundant, but I just want to make sure this works and can refactor later.

const ImageGallery = (props) => {

  return(
    <div>
      <StyledMainImage src={props.currentImage}/>
    </div>
  )
};

export default ImageGallery;
