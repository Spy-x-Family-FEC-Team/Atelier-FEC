import React, {useState} from 'react';
import styled from 'styled-components';
import StyleAndPrice from './StyleAndPrice.jsx';
import PurchaseOrLike from './PurchaseOrLike.jsx';

const StyleSectionWrapper = styled.section`
  background: #fcfbf7;
  height:100%;
  display: grid;
  grid-template-rows: 70% 30%;
  font-family: 'Helvetica', 'Arial', sans-serif;
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
      <PurchaseOrLike
        stylesForThisProduct={props.stylesForThisProduct}
        skusOfSelectedStyle={props.stylesForThisProduct.results[props.indexOfStyleOption].skus}
        _id={props._id}
      />
     </StyleSectionWrapper>
    </div>
  )
}

export default StyleSection;