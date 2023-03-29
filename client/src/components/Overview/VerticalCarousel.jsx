import React from 'react';
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
  margin-bottom:6px;
`;

const StyledDownButton = styled.section`
  background:white;
  padding:3px;
  text-align:center;
  width: 7.5vw;
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
`;

const StyledUnderline = styled.section`
  color:white;
  font-size:large;
  width: 10vw;
`;


const VerticalCarousel = (props) => {


  return(
    <StyledVerticalCarouselGrid>
      {props.indexOfThisProdView > 0 ?
        <StyledUpButton
        onClick={() => {
          props.handleViewSelection(props.indexOfThisProdView -1);
          }}
        >
          <FontAwesomeIcon icon={solid('chevron-up')} />
        </StyledUpButton>
      :null}

      {props.prodViewThumbnails.map((url, index) => {
        return (
          <StyledProdViewThumbnailWrapper
            key={index}
            onClick={() => {
              props.handleViewSelection(index);
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

      {props.indexOfThisProdView < props.prodViewThumbnails.length - 1 ?
        <StyledDownButton
          onClick={() => {
            props.handleViewSelection(props.indexOfThisProdView +1);
            }}
        >
          <FontAwesomeIcon icon={solid('chevron-down')} />
        </StyledDownButton>
      :null}
    </StyledVerticalCarouselGrid>
  )
};

export default VerticalCarousel;
