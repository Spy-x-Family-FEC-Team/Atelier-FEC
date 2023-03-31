import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';


const StyledVerticalCarouselGrid = styled.section`
  display:grid;
  grid-template-rows:1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  width: 12vw;
  max-height: 50vh;
`;

const StyledUpButton = styled.section`
  background:white;
  padding:3px;
  text-align:center;
  width: 7.5vw;
  border-radius:10px;
  margin-bottom:6px;
  color:#23493F;
  cursor:pointer;
`;

const StyledDownButton = styled.section`
  background:white;
  padding:3px;
  text-align:center;
  width: 7.5vw;
  border-radius:10px;
  color:#23493F;
  cursor:pointer;
`;

const StyledProdViewThumbnailWrapper = styled.section`
  position:relative;
  height:9vh;
  width:9vw;
`;

const StyledProdViewThumbnail = styled.img`
  height:90%;
  width: 90%;
  object-fit:cover;
  border-radius: 12px;
  cursor:pointer;
`;

const StyledUnderline = styled.section`
  color:white;
  font-size:large;
  width: 10vw;
`;


const VerticalCarousel = (props) => {

  const [thumbnails, setThumbnails] = useState(props.prodViewThumbnails);
  const [hereMoreViews, setHereMoreViews] = useState();
  const [listOffset, setListOffset] = useState(0);


  const handleUpClick = () => {
    setListOffset(listOffset-1);
    props.handleVerticalSliceSelection(props.viewListIndex -1);
    if(props.indexOfThisProdView > props.viewListIndex +7) {
      props.handleViewSelection(props.viewListIndex +7);
    }
  };

  const handleDownClick = () => {
    setListOffset(listOffset + 1);
    props.handleVerticalSliceSelection(props.viewListIndex +1);
    if(props.indexOfThisProdView < props.viewListIndex) {
      props.handleViewSelection(props.viewListIndex +1);
    }
  };

  useEffect (() => {
    setThumbnails(props.prodViewThumbnails);
    setHereMoreViews(props.moreViews);
  }, [props.prodViewThumbnails, props.viewListIndex, props.moreViews, props.indexOfThisProdView]);


  return(
    <StyledVerticalCarouselGrid>
      {props.viewListIndex > 0 ?
        <StyledUpButton
        onClick={handleUpClick}
        >
          <FontAwesomeIcon icon={solid('chevron-up')} />
        </StyledUpButton>
      :null}

      {thumbnails.map((url, index) => {
        return (
          <StyledProdViewThumbnailWrapper
            key={index}
            onClick={() => {
              props.handleViewSelection(index + listOffset);
              }}>
            <StyledProdViewThumbnail
              src={url}
            />
            {props.indexOfThisProdView === index ?
            <StyledUnderline>
              <span>________</span>
            </StyledUnderline>
            :null}
          </StyledProdViewThumbnailWrapper>
        )
      })}

      {hereMoreViews ?
        <StyledDownButton
          onClick={handleDownClick}
        >
          <FontAwesomeIcon icon={solid('chevron-down')} />
        </StyledDownButton>
      :null}
    </StyledVerticalCarouselGrid>
  )
};

export default VerticalCarousel;
