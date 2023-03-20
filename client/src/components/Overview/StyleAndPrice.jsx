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

const StyleAndPrice = (props) => {

  return(
    <div>
      <div>Price will go here</div>
      <div>STYLE > selected style name</div>
      <StyleImageGridWrapper>

        {props.styleThumbnails.map((url, index) => {
          return (
            <StyledStyleThumbnail
            key={index}
            src={url}/>
          )
        })}

      </StyleImageGridWrapper>

    </div>
  )
}

export default StyleAndPrice;