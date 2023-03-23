import React, {useState} from 'react';
import styled from 'styled-components';
import StyleAndPrice from './StyleAndPrice.jsx';
import SizeAndQuantity from './SizeAndQuantity.jsx';

const StyleSectionWrapper = styled.section`
  background: pink;
  height:100%;
  display: grid;
  grid-template-rows: 60% 40%;
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

        salePrice={props.stylesForThisProduct.results[props.indexOfStyleOption].sale_price}

        indexOfStyleOption={props.indexOfStyleOption}
      />
      <SizeAndQuantity
        stylesForThisProduct={props.stylesForThisProduct}
        skusOfSelectedStyle={props.stylesForThisProduct.results[props.indexOfStyleOption].skus}
      />
     </StyleSectionWrapper>
    </div>
  )
}

export default StyleSection;