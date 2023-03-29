import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const StyleSectionWrapper = styled.section`
  max-height:40vh;
  overflow: hidden;
`;

const StyleImageGridWrapper = styled.section`
  display:grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  overflow: hidden;
`;

const StyledSalePrice = styled.section`
  color:red;
  display:inline-block;
`;

const StyledStyleThumbnail = styled.img`
  height:62%;
  width:90%;
  margin: 5px;
  border-radius: 50%;
  z-index: 1;
  object-fit:cover;
  max-height:100px;
  max-width:80px;
`;

const StyledStyleThumbnailWrapper = styled.section`
  position: relative;
`;

// The look of this checkmark is just temporary until we make some aesthetic choices together.
const StyledCheckmark = styled.section`
  color: #571147;
  font-size: large;
  position: absolute;
  z-index: 2;
  margin-left:75%;
  margin-top: 15%;
`;

const PriceAndText = styled.section`
  margin:4px;
`;

const StyleAndPrice = (props) => {

  return(
    <StyleSectionWrapper>
      <PriceAndText>
        {props.salePrice ?
          <StyledSalePrice>
          ${props.salePrice}&nbsp;&nbsp;&nbsp;
          </StyledSalePrice>
        : null}
        <span>$
          {props.salePrice ?
          <strike>{props.originalPrice}</strike>
          : props.originalPrice}
        </span>
        <div><span style={{color:"#91768a"}}>STYLE >&nbsp;</span>{props.styleName}</div>
      </PriceAndText>
      <StyleImageGridWrapper>
        {props.styleThumbnails.map((url, index) => {
          return (
            <StyledStyleThumbnailWrapper
            key={index.toString()}>
              {props.indexOfStyleOption === index ?
                <StyledCheckmark>
                  <FontAwesomeIcon icon={solid('circle-check')} />
                </StyledCheckmark>
                : null}
              <StyledStyleThumbnail
                key={index.toString()}
                src={url}
                onClick={(event) => {
                  props.handleStyleSelection(index);
                }}
              />
            </StyledStyleThumbnailWrapper>
          )
        })}
      </StyleImageGridWrapper>
    </StyleSectionWrapper>
  )
};

export default StyleAndPrice;