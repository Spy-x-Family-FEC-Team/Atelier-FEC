import React from 'react';
import styled from 'styled-components';
import VerticalCarousel from './VerticalCarousel.jsx';

const StyledImageGalleryWrapper = styled.section`
  position: relative;
`;

const StyledMainImageWrapper = styled.section`
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-axis:1;
  height:100%;
  width:100%
  position:absolute;
`;

const StyledMainImage = styled.img`
  max-height: 70vh;
  max-width: 100%;
  z-axis:1;
`;

const StyledVerticalCarouselWrapper = styled.section`
  background:red;
  position:absolute;
  z-axis:2;
  margin-left:1%;
  margin-top: 5%;
  align-items: left;
  height:90%;
`;


const ImageGallery = (props) => {

  return(
    <div>
      <StyledImageGalleryWrapper>
        <StyledVerticalCarouselWrapper>
          <VerticalCarousel />
        </StyledVerticalCarouselWrapper>
        <StyledMainImageWrapper>
          <StyledMainImage src={props.currentImage}/>
        </StyledMainImageWrapper>

      </StyledImageGalleryWrapper>
    </div>
  )
};

export default ImageGallery;
