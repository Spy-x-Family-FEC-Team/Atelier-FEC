import React, {useState} from 'react';
import styled from 'styled-components';
import VerticalCarousel from './VerticalCarousel.jsx';
import OverlayWindow from '/client/src/components/assets/OverlayWindow.jsx';

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
  position:absolute;
  z-axis:2;
  margin-left:1%;
  margin-top: 5%;
  margin-bottom: 5%;
  align-items: left;
  height:60%;
`;


const ImageGallery = (props) => {

  const [expandedView, setExpandedView] = useState(false);

  const toggleExpanded = () => {
    setExpandedView(!expandedView);
  }

  return(
    <div>
      <StyledImageGalleryWrapper>
        <StyledVerticalCarouselWrapper>
          <VerticalCarousel
            prodViewThumbnails={props.prodViewThumbnails}
            indexOfThisProdView={props.indexOfThisProdView}
            handleViewSelection={props.handleViewSelection}
          />
        </StyledVerticalCarouselWrapper>
        <StyledMainImageWrapper>
          <StyledMainImage
          src={props.currentImage}
          onClick={toggleExpanded}
          />
        </StyledMainImageWrapper>
      </StyledImageGalleryWrapper>
      {expandedView ?
        <OverlayWindow
          onBgClick={toggleExpanded}
        >
          <div>here</div>
        </OverlayWindow>
      :null}
    </div>
  )
};

export default ImageGallery;
