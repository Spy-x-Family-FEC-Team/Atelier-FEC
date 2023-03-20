import React from 'react';
import styled from 'styled-components';
import OneFeature from './OneFeature.jsx';

const ProductDetailsGrid = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  height: 20vh;
`;

const DescriptionWrapper = styled.section`
  background: white;
`;

const FeaturesWrapper = styled.section`
  background: grainsbro;
`;


const ProductDetails = (props) => {

  return(
    <div>
      <ProductDetailsGrid>
        <DescriptionWrapper>
          <h3>Description</h3>
          <p>{props.description}</p>
        </DescriptionWrapper>
        <FeaturesWrapper>
          <h3>Features</h3>
          <ul>
            {props.features.map((item, index) =>
              <OneFeature
                key={index}
                featureName={item.feature}
                value={item.value} />
            )}
          </ul>
        </FeaturesWrapper>
      </ProductDetailsGrid>
    </div>
  )
};

export default ProductDetails;