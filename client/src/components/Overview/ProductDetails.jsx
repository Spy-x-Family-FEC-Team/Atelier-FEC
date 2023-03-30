import React from 'react';
import styled from 'styled-components';


const ProductDetailsGrid = styled.section`
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


const ProductDetails = (props) => {

  return(
    <div>
      <ProductDetailsGrid>
        <DescriptionWrapper>
          <p>{props.description}</p>
        </DescriptionWrapper>
      </ProductDetailsGrid>
    </div>
  )
};

export default ProductDetails;