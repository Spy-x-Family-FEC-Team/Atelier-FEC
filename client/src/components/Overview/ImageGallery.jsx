import React from 'react';
import styled from 'styled-components';

const StyledMainImage = styled.img`
  max-height: 70vh;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;


const ImageGallery = (props) => {

  return(
    <div>
      <StyledMainImage src={props.currentImage}/>
    </div>
  )
};

export default ImageGallery;
