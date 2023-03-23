import React from "React";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const CardContainer = styled.div`
  background-color: green;
  width: 200px;
  height: 100%;
  grid-column: span 1;
  scroll-snap-align: center;
  display: grid;
  grid-template-rows: 2fr 1fr;
  position: relative;
`;

const ActionBtn = styled.div`
  height: 40px;
  width: 40px;
  padding: 0;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ProductImage = styled.div`
  background-color: pink;
`
const ProductInfo = styled.div`
  background-color: white;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
`
const ProductCategory = styled.div`
  background-color: white;
`
const ProductName = styled.div`
  background-color: white;
`
const ProductPrice = styled.div`
  background-color: white;
`
const Stars = styled.div`
`

const StyledCard = () => {

  return (

    <CardContainer>
      <ActionBtn>
        <FontAwesomeIcon icon={faStar} />
      </ActionBtn>
      <ProductImage/>
      <ProductInfo>
        <ProductCategory>
          Category
        </ProductCategory>
        <ProductName>
          Product Name
        </ProductName>
        <ProductPrice>
          $123
        </ProductPrice>
        <Stars>
        &#9733; &#9733; &#9733; &#9733; &#9733;
        </Stars>
      </ProductInfo>
    </CardContainer>

  )

}

export default StyledCard;