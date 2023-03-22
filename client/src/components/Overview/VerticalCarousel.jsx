import React from 'react';
import styled from 'styled-components';


const StyledVerticalCarouselGrid = styled.section`
  display:grid;
  grid-template-rows:1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  width: 90px;
  max-height: 300px;
`;

const StyledUpArrow = styled.section`
  background:white;
  padding:3px;
  text-align:center;
`;
const StyledDownArrow = styled.section`
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
      <StyledUpArrow>Up</StyledUpArrow>
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
      <StyledDownArrow>Down</StyledDownArrow>
    </StyledVerticalCarouselGrid>
  )
};

export default VerticalCarousel;
