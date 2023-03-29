import React from 'react';
import {useState, useEffect} from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes, useParams} from 'react-router-dom';

import styled from "styled-components";
import Related from "/client/src/components/Related";
import Overview from "/client/src/components/Overview/index";
import Reviews from "/client/src/components/Reviews";
import axios from 'axios';

import defaultProduct from '/server/exampleData/defaultProduct.json';
import defaultReviews from '/server/exampleData/defaultReviews.json';
import defaultReviewData from '/server/exampleData/defaultReviewData.json';
import GlobalFonts from '/client/src/components/assets/fontStyles.js'


const FoldWrapper = styled.section`
margin: auto;
width: 90vw;
`;

const BelowFoldWrapper = styled.section`
margin: auto;
width: 80vw;
background: lightgrey;
`;


const ItemPage = () => {
  /**~~~~~Default Values are blanked or filled with placeholders in order to load in the skeleton before API response~~~~*/
  const [product, updateProduct] = useState(defaultProduct)
  const [reviews, updateReviews] = useState(defaultReviews)
  const [reviewData, updateReviewData] = useState(defaultReviewData)

  const _id = useParams()['id'];

  // this is functinoalized to be able to pass it as a prop
  const refreshProducts = () => {
    console.log(_id)
    axios.get(`/api/products/${_id}`)
      .then((results) => {
        console.log(results.data)
        updateProduct(results.data)})
      .catch((err) => {
        console.log(err)
      })
    axios.get(`/api/reviews/${_id}`)
      .then((results) => {
        console.log(results.data)
        updateReviews(results.data)})
      .catch((err) => {
        console.log(err)
      })
    axios.get(`/api/reviews/meta/${_id}`)
      .then((results) => {
        console.log(results.data)
        updateReviewData(results.data)})
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(refreshProducts,[])




    return(
    <>
      <GlobalFonts/>
      <FoldWrapper>
        <Overview product={product} reviewData={reviewData} />
      </FoldWrapper>
      <BelowFoldWrapper>
        <Related product={product}/>
        <Reviews reviewData={reviewData} reviews={reviews} product={product} refresh={refreshProducts}/>
      </BelowFoldWrapper>
    </>)
}





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