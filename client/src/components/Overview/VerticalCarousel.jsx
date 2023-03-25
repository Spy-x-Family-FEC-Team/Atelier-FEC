import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';


const StyledVerticalCarouselGrid = styled.section`
  display:grid;
  grid-template-rows:1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  width: 90px;
  max-height: 300px;
`;

const StyledUpButton = styled.section`
  background:white;
  padding:3px;
  text-align:center;
`;
const StyledDownButton = styled.section`
  background:white;
  padding:3px;
  text-align:center;
`;

const StyledProdViewThumbnailWrapper = styled.section`
  position:relative;
`;

const StyledProdViewThumbnail = styled.img`
  height:90px;
  width: 100px;
  object-fit:cover;
`;

const StyledUnderline = styled.section`
  color:white;
  font-size:large;
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
