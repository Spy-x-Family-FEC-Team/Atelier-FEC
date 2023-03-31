import React from "react";
import {useState, useEffect} from "react";
import styled from "styled-components";
import AddToOutfit from "../ActionBtn/AddToOutfit.jsx";
import RmvFromOutfit from "../ActionBtn/RmvFromOutfit.jsx";
import ActionBtn from "../ActionBtn/ActionBtn.jsx";
import CompareItems from "../CompareWindow";
import StarRating from "/client/src/components/assets/StarRating.jsx";
import { getNumberOfRatings, getMeanRating } from "/client/src/components/sharedComponents/ratingsObjectFunctions.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { solid, thin, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import whiteBackground from '/client/src/components/assets/images/whiteBackground.jpg';
import outfit from '/client/src/components/assets/outfit.jsx'
import localForage from "localforage";

const CardContainer = styled.div`
  grid-column: span 1;
  scroll-snap-align: center;
  width: 200px;
  height: 300px;
  display: grid;
  grid-template-rows: 200px 1fr;
  position: relative;
`;

const ProductContainer = styled.div`
  width: 200px;
  height: 300px;
  display: grid;
  grid-template-rows: 200px 1fr;
  position: relative;
  text-decoration: none;
`

const ProductImage = styled.img`
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
  text-decoration: none;
`;
const ProductCategory = styled.div`
  background-color: white;
  font-size: smaller;
`;
const ProductName = styled.div`
  background-color: white;
  font-weight: bold;
`;
const ProductPrice = styled.div`
  background-color: white;
`;
const Stars = styled.div`
`;
const StyledCard = ({item, mode, list, setList, product}) => {

  if (item[0].name === 'AxiosError') {
    return (
      <CardContainer>
      </CardContainer>
    )
  }

  if (item === 'outfitAdd') {
    return (
      <CardContainer>
        <AddToOutfit item={item} list={list} setList={setList} product={product}/>
      </CardContainer>
    )
  }

  const [numberOfRatings, setNumberOfRatings] = useState(null);
  const [meanRating, setMeanRating] = useState(null);

  useEffect (() => {
    if(item) {
      setNumberOfRatings(getNumberOfRatings(item[1].ratings));
      setMeanRating(getMeanRating(item[1].ratings));
    }
  }, [])

  const merch = item.length ? item[0] : outfit[0];
  const image = item.length ? item[2].results[0].photos[0].url : whiteBackground;
  const id = item[0].id;
  const url = `/items/${id}`

  return (

    <CardContainer>
      <ProductContainer as="a" href={url}>
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
            {numberOfRatings ?
            <div>
              <StarRating rawRating = {meanRating}/>
            </div>
            :null
            }
          </Stars>
        </ProductInfo>
      </ProductContainer>
       {/*if mode is related, display comparison button, otherwise display remove from outfit button*/}
       {mode === 'related' ?
      (<CompareItems item={item} product={product}/>) :
      (<RmvFromOutfit item={item} list={list} setList={setList}/>)}
      {/*all cards product info format is the same*/}
    </CardContainer>

  )

}

export default StyledCard;