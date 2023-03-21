import React from 'react';
import styled from 'styled-components';

const StyleImageGridWrapper = styled.section`
  display:grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  padding:5px;
`;

// TODO: Currently these images are being stretched in weird ways because of their varying aspect ratios. Rather than setting the height and width, I will want to instead do some form of masking here.
const StyledStyleThumbnail = styled.img`
  height:64%;
  width:90%;
  margin: 5px;
  border-radius:50%;
`;
const StyledSalePrice = styled.section`
  color:red;
  display:inline-block;
`;

const StyleAndPrice = (props) => {

  return(
    <div>
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
      <div>STYLE > {props.styleName}</div>
      <StyleImageGridWrapper>

        {props.styleThumbnails.map((url, index) => {
          return (
            <StyledStyleThumbnail
              key={index.toString()}
              src={url}
              onClick={(event) => {
                props.handleStyleSelection(index);
              }}
            />
          )
        })}

      </StyleImageGridWrapper>

    </div>
  )
}

export default StyleAndPrice;