import React, {useState} from 'react';
import styled from 'styled-components';
import VerticalCarousel from './VerticalCarousel.jsx';
import OverlayWindow from '/client/src/components/assets/OverlayWindow.jsx';
import Expanded from './Expanded.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

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
  max-height: 65vh;
  max-width: 100%;
  object-position: 50% 50%;
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

const StyledRightButton = styled.section`
  position:absolute;
  right:5%;
  top:40%;
  font-size:x-large;
  color:#571147;
`;
// background: rgba(255, 122, 89, .5);

const StyledLeftButton = styled.section`
  position:absolute;
  left:120px;
  top:40%;
  font-size:x-large;
  color:#571147;
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
          {props.indexOfThisProdView < props.prodViewThumbnails.length - 1 ?
            <StyledRightButton
              onClick={() => {
                props.handleViewSelection(props.indexOfThisProdView +1);
                }}
            >
              <FontAwesomeIcon icon={solid('chevron-right')} />
            </StyledRightButton>
          :null}
          {props.indexOfThisProdView > 0 ?
            <StyledLeftButton
            onClick={() => {
              props.handleViewSelection(props.indexOfThisProdView -1);
              }}
            >
              <FontAwesomeIcon icon={solid('chevron-left')} />
            </StyledLeftButton>
          :null}
        </StyledMainImageWrapper>
      </StyledImageGalleryWrapper>

      {expandedView ?
        <OverlayWindow
          onBgClick={toggleExpanded}
        >
          <Expanded
            toggleExpanded={toggleExpanded}
            currentImage={props.currentImage}
            indexOfThisProdView={props.indexOfThisProdView}
            handleViewSelection={props.handleViewSelection}
            prodViewThumbnails={props.prodViewThumbnails}
          />
        </OverlayWindow>
      :null}
    </div>
  )
};

export default ImageGallery;
