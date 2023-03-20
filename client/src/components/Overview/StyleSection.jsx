import React, {useState} from 'react';
import styled from 'styled-components';
import StyleAndPrice from './StyleAndPrice.jsx';
import SizeAndQuantity from './SizeAndQuantity.jsx';
import BagAndLiked from './BagAndLiked.jsx';

const StyleSectionWrapper = styled.section`
  background: pink;
  height:100%;
  display: grid;
  grid-template-rows: 50% 25% 25%;
`;

const StyleSection = (props) => {

  const makeThumbnailsList = function (stylesObj) {
    var thumbnails = [];
    stylesObj.results.forEach((style) =>{
      thumbnails.push(style.photos[0].thumbnail_url);
    });
    return thumbnails;
  };



  return(
    <div>
     <StyleSectionWrapper>
      <StyleAndPrice
        styleThumbnails={makeThumbnailsList(props.stylesForThisProduct)}

        handleStyleSelection={props.handleStyleSelection}

        styleName={props.stylesForThisProduct.results[props.indexOfStyleOption].name}

        originalPrice={props.stylesForThisProduct.results[props.indexOfStyleOption].original_price}
        />
      <SizeAndQuantity />
      <BagAndLiked />
     </StyleSectionWrapper>
    </div>
  )
}

export default StyleSection;