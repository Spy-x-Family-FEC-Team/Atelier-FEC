import React from "React";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { solid, thin, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import product from "../../../../../server/exampleData/product.json"
import productStyles from "../../../../../server/exampleData/styles.json"
import localForage from "localforage";

const CardContainer = styled.div`
  background-color: green;
  grid-column: span 1;
  scroll-snap-align: center;
  width: 200px;
  height: 300px;
  display: grid;
  grid-template-rows: 200px 1fr;
  position: relative;
`;

const AddOutfit = styled.button`
  background-color: grey;
  width: 50px;
  height: 50px;
  position: absolute;
  transform: translateY(-50%);
  transform: translateX(50%);
`

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
  grid-rows-start: 1;
  height: 100%;
  width: 100%;
  object-fit: cover;
`
const ProductInfo = styled.div`
  background-color: white;
  grid-rows-start: 2;
  height: 100%;
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
const StyledCard = ({item, mode, setOutfit}) => {

  //takes in item code, gets product info
  //NEED TO CALCULATE RATING AND RENDER STARS; GET REQUEST FOR REVIEWS?

  const image = productStyles.results[0].photos[0].url
  console.log('image url', image);

  const addToOutfit = () => {
    localForage.getItem('outfits')
      .then((data) => {
        if (!data) {
          localForage.setItem('outfits', [40344])
          console.log('localForage setting first time', localForage);
        } else {
          const outfits = data.slice();
          console.log('outfit retrieval', outfits);
          outfits.push(40344);
          localForage.clear();
          localForage.setItem('outfits updated', outfits);
        }
      })
      .catch( err => { console.log('error getting outfit', err)})
  };

  const rmvFromOutfit = (item) => {
    localForage.getItem('outfits')
      .then((data) => {
        if (!data) {
          console.log('no outfits');
        } else {
          const outfits = data.slice();
          console.log('outfit retrieval', outfits);
          const index = outfits.indexOf(item);
          outfits.splice(index, 1);
          localForage.clear();
          localForage.setItem('outfits updated', outfits);

          setOutfit(outfits);
        }
      })
      .catch( err => { console.log('error getting outfit', err)})
  };


  if (item === 'outfitAdd') {
    return (
      <CardContainer>
        <AddOutfit onClick={addToOutfit}>Add to Outfit</AddOutfit>
      </CardContainer>
    )
  }

  return (

    <CardContainer>
      {mode === 'related' ? (
        <ActionBtn>
          <FontAwesomeIcon icon={faStar} />
        </ActionBtn>
        ) : (
        <ActionBtn onClick={() => {rmvFromOutfit(item)}}>
          <FontAwesomeIcon icon={solid("circle-xmark")} />
        </ActionBtn>)}
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