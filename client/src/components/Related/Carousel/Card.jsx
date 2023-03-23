import React from "React";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import product from "../../../../../server/exampleData/product.json"
import productStyles from "../../../../../server/exampleData/styles.json"

const CardContainer = styled.div`
  background-color: green;
  grid-column: span 1;
  scroll-snap-align: center;
  width: 200px;
  height: 300px;
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

const ProductImage = styled.img`
  background-color: pink;
  height: 200px;
  width: 100%;
  object-fit: cover;
`
const ProductInfo = styled.div`
  background-color: white;
  height: 100px;
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

const StyledCard = ({item}) => {

  //takes in item code, gets product info
  //NEED TO CALCULATE RATING AND RENDER STARS; GET REQUEST FOR REVIEWS?

  const image = productStyles.results[0].photos[0].url
  console.log('image url', image);

  return (

    <CardContainer>
      <ActionBtn>
        <FontAwesomeIcon icon={faStar} />
      </ActionBtn>
      <ProductImage src={image} alt={item.name}/>
      <ProductInfo>
        <ProductCategory>
          {product.category}
        </ProductCategory>
        <ProductName>
          {product.name}
        </ProductName>
        <ProductPrice>
          {product.default_price}
        </ProductPrice>
        <Stars>
        &#9733; &#9733; &#9733; &#9733; &#9733;
        </Stars>
      </ProductInfo>
    </CardContainer>

  )

}

export default StyledCard;