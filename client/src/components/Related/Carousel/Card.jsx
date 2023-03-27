import React from "React";
import styled from "styled-components";
import AddToOutfit from "../ActionBtn/AddToOutfit.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { solid, thin, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import whiteBackground from '/client/src/components/assets/images/whiteBackground.jpg';
import outfit from '/client/src/components/assets/outfit.jsx'
// import product from "../../../../../server/exampleData/product.json"
// import productStyles from "../../../../../server/exampleData/styles.json"
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
`;

const ProductImage = styled.img`
  background-color: pink;
  grid-rows-start: 1;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const ProductInfo = styled.div`
  background-color: white;
  grid-rows-start: 2;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
`;
const ProductCategory = styled.div`
  background-color: white;
`;
const ProductName = styled.div`
  background-color: white;
`;
const ProductPrice = styled.div`
  background-color: white;
`;
const Stars = styled.div`
`;
const StyledCard = ({item, mode, list, setList, product}) => {

  const addToOutfit = (item, list) => {

    const outfits = list.slice();
    outfits.push(outfit);
    localForage.clear();
    localForage.setItem('outfits', outfits)
      .then( () => {
        setList(outfits);
      })
      .catch( err => { console.log('error adding outfit', err)});
  };

  const rmvFromOutfit = (item) => {
    const outfits = list.slice();
    outfits.forEach( (prod, index) => {
      if (prod[0].id === item[0].id) {
        outfits.splice(index, 1);
      }
    });
    localForage.clear();
    localForage.setItem('outfits', outfits)
      .then( () => {
        setList(outfits);
      })
      .catch( err => { console.log('error removing from outfit', err)});
  };

  //display add button as first card if on outfit carousel
  if (item === 'outfitAdd') {
    return (
      <CardContainer>
        <AddOutfit onClick={() => {addToOutfit(item, list)}}>Add to Outfit</AddOutfit>
      </CardContainer>
    )
  }

  //takes in item code, gets product info
  console.log('card item', item);
  //NEED TO CALCULATE RATING AND RENDER STARS; GET REQUEST FOR REVIEWS?
  console.log('list inside card', list);
  console.log('itemlength', item.length);
  //example product upon first load
  const merch = item.length ? item[0] : outfit[0];
  // const image = productStyles.results[0].photos[0].url
  const image = item.length ? item[2].results[0].photos[0].url : whiteBackground;
  console.log('image url', image);

  return (

    <CardContainer>
      {/*if mode is related, display comparison button, otherwise display remove from outfit button*/}
      {mode === 'related' ? (
        <ActionBtn>
          <FontAwesomeIcon icon={faStar} />
        </ActionBtn>
        ) : (
        <ActionBtn onClick={() => {rmvFromOutfit(item)}}>
          <FontAwesomeIcon icon={solid("circle-xmark")} />
        </ActionBtn>)}
      {/*all cards product info format is the same*/}
      <ProductImage src={image} alt={'product image'}/>
      <ProductInfo>
        <ProductCategory>
          {merch.category}
        </ProductCategory>
        <ProductName>
          {merch.name}
        </ProductName>
        <ProductPrice>
          {merch.default_price}
        </ProductPrice>
        <Stars>
        &#9733; &#9733; &#9733; &#9733; &#9733;
        </Stars>
      </ProductInfo>
    </CardContainer>

  )

}

export default StyledCard;