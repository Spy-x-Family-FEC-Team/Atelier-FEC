import React from 'react';
import styled from 'styled-components';
import OneFeature from './OneFeature.jsx';

const ProductDetailsGrid = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  height: 20vh;
`;

const DescriptionWrapper = styled.section`
  background: #fcfbf7;
  font-family: 'Helvetica', 'Arial', sans-serif;
  padding:5px;
`;

const FeaturesWrapper = styled.section`
  background: #fcfbf7;
  font-family: 'Helvetica', 'Arial', sans-serif;
`;

const FeaturesTitle = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FeaturesListWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;


const ProductDetails = (props) => {

  return(
    <div>
      <ProductDetailsGrid>
        <DescriptionWrapper>
          <h3>&nbsp;&nbsp;&nbsp;Description</h3>
          <p>{props.description}</p>
        </DescriptionWrapper>
        <FeaturesWrapper>
          <FeaturesTitle><h3>Features</h3></FeaturesTitle>
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