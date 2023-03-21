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
  padding:1px;
  text-align:center;
`;
const StyledDownArrow = styled.section`
  background:white;
  padding:1px;
  text-align:center;
`;

const StyledProdViewThumbnail = styled.img`
  height:90px;
  width: 100px;
  object-fit:cover;
`;


const VerticalCarousel = (props) => {

  return(
    <StyledVerticalCarouselGrid>
      <StyledUpArrow>Up</StyledUpArrow>
      {props.prodViewThumbnails.map((url, index) => {
        return (
          <StyledProdViewThumbnail
            key={index}
            src={url}
          />
        )
      })}
      <StyledDownArrow>Down</StyledDownArrow>
    </StyledVerticalCarouselGrid>
  )
};

export default VerticalCarousel;
