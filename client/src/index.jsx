import React from 'react';
import {useState, useEffect} from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes, useParams} from 'react-router-dom';

import styled from "styled-components";
import Related from "/client/src/components/Related";
import Overview from "/client/src/components/Overview/index";
import Reviews from "/client/src/components/Reviews";
import axios from 'axios';

// Dummy data access. Figured out we needed to change the filetype to .json. Feel free to add the others if you want to use them. COMMENT THIS OUT WHEN YOU BEGIN TESTING NETWORKED STUFF
import exampleProduct from '/server/exampleData/product.json';
import reviews from '/server/exampleData/reviews.json';
// import reviewData from '/server/exampleData/reviewData.json';

import defaultProduct from '/server/exampleData/defaultProduct.json';


const FoldWrapper = styled.section`
margin: auto;
width: 90%;
background: papayawhip;
`;

const BelowFoldWrapper = styled.section`
margin: auto;
width: 80%;
background: lightgrey;
`;


const ItemPage = () => {
  /**~~~~~Default Values are blanked or filled with placeholders in order to load in the skeleton before API response~~~~*/
  const [product, updateProduct] = useState(defaultProduct)
  const [reviews, updateReviews] = useState({
    "product": "40344",
    "page": 0,
    "count": 1000,
    "results": []})
  const [reviewData, updateReviewData] = useState({
  "product_id": "None",
  "ratings": {
      "1": "0",
      "2": "0",
      "3": "0",
      "4": "0",
      "5": "0"
  },
  "recommended": {
      "false": "0",
      "true": "0"
  },
  "characteristics": {}
})

const _id = useParams()['id'];

useEffect(() => {
  console.log(_id)
  axios.get(`/api/products/${_id}`)
    .then((results) => {
      console.log(`----------------------get request for /api/products/${_id}  :  `, results.data)
      updateProduct(results.data)})
  // axios.get(`/api/reviews/${_id}`)
  //   .then((results) => {
  //     console.log(results.data)
  //     updateReviews(results.data)})
  // axios.get(`/api/reviews/meta/${_id}`)
  //   .then((results) => {
  //     console.log(results.data)
  //     updateReviewData(results.data)})
},[])

  return(
  <>
    <FoldWrapper>
      <Overview
        product={product}
        reviewData={reviewData}
      />
    </FoldWrapper>
    {/* <BelowFoldWrapper>
      <Related />
      <Reviews reviewData={reviewData} reviews={reviews} product={product}/>
    </BelowFoldWrapper> */}
  </>)}



const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/items/:id" element={<ItemPage/>}/>
      <Route path="/items*" element={<div>Use the format /items/item_id instead</div>}/>
    </Routes>
  </BrowserRouter>
)

ReactDOM.render(
  <App />,
  document.getElementById("root")
);