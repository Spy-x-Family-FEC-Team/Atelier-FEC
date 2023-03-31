import React, {useState} from 'react';
import styled from 'styled-components';
import VerticalCarousel from './VerticalCarousel.jsx';
import OverlayWindow from '/client/src/components/assets/OverlayWindow.jsx';
import Expanded from './Expanded.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const StyledImageGalleryWrapper = styled.section`
  height:65vh;
  display:grid;
  grid-template-columns: 20%  80%;
  grid-template-rows: 1fr;
`;

const StyledMainImageWrapper = styled.section`
  padding-left: 5%;
  padding-right: 5%;
  // display: flex;
  // align-items: center;
  // justify-content: center;
  // height:90%;
  // width:90%
  min-height:0px;
  min-width:0px;
  // margin:20px;
  position:relative;
`;

const StyledMainImage = styled.img`
  max-height: 65vh;
  max-width: 90%;
  border-radius: 18px;
  cursor:zoom-in;
`;

const StyledVerticalCarouselWrapper = styled.section`
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
  width: 40px;
  height: 40px;
  align-items: center;
  transform: translateY(-50%);
  font-size:x-large;
  background: rgba(255, 255, 255, .5);
  border-radius:50%;
  color:#23493F;
  cursor:pointer;
`;


const StyledLeftButton = styled.section`
  position:absolute;
  left:120px;
  top:40%;
  font-size:x-large;
  width: 40px;
  height: 40px;
  align-items: center;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, .5);
  border-radius:50%;
  color:#23493F;
  cursor:pointer;
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
              &nbsp;&nbsp;<FontAwesomeIcon icon={solid('chevron-right')} />
            </StyledRightButton>
          :null}
          {props.indexOfThisProdView > 0 ?
            <StyledLeftButton
            onClick={() => {
              props.handleViewSelection(props.indexOfThisProdView -1);
              }}
            >
              &nbsp;&nbsp;<FontAwesomeIcon icon={solid('chevron-left')} />
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
