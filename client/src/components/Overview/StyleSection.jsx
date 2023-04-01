import React, {useState} from 'react';
import styled from 'styled-components';
import StyleAndPrice from './StyleAndPrice.jsx';
import PurchaseOrLike from './PurchaseOrLike.jsx';
import Social from './Social.jsx';
import OneFeature from './OneFeature.jsx';
import TitleCatRev from './TitleCatRev.jsx';

const StyleSectionWrapper = styled.section`
  height:80vh;
  // display: grid;
  // grid-template-rows:20% 45% 20% 10% 10%;
  display:flex;
  flex-direction:column;
`;

const FeaturesWrapper = styled.section`
  height:8vh;
  overflow:hidden;
`;


const FeaturesListWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow:hidden;
`;

const StyleSection = (props) => {


  return(
    <div>
     <StyleSectionWrapper>
      <TitleCatRev
          title={props.title}
          category={props.category}
          data={props.data}
      />
      <StyleAndPrice
        styleThumbnails={props.styleThumbnails}

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
      <Social />
      <FeaturesWrapper>
        <FeaturesListWrapper>
        <ul>
          {props.features.map((item, index) =>
            <OneFeature
              key={index}
              featureName={item.feature}
              value={item.value} />
          )}
        </ul>
        </FeaturesListWrapper>
      </FeaturesWrapper>
     </StyleSectionWrapper>
    </div>
  )
}

export default StyleSection;