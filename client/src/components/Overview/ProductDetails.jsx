import React from 'react';
import styled from 'styled-components';
import OneFeature from './OneFeature.jsx';

const ProductDetailsGrid = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  height: 18vh;
  padding-top: 2vh;
  padding-bottom:5vh;

`;

const DescriptionWrapper = styled.section`
  padding:20px;
  padding-left:30px;
  padding-right:30px;
  border-right: solid;
  border-right-width: thin;
  border-right-color: #A7D4D9;
`;

const FeaturesWrapper = styled.section`
`;


const FeaturesListWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
`;


const ProductDetails = (props) => {

  return(
    <div>
      <ProductDetailsGrid>
        <DescriptionWrapper>
          <p>{props.description}</p>
        </DescriptionWrapper>
        <FeaturesWrapper>
          {/* <FeaturesTitle><h3>Features</h3></FeaturesTitle> */}
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
      </ProductDetailsGrid>
    </div>
  )
};

export default ProductDetails;