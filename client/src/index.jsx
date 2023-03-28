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
import product from '/server/exampleData/product.json';
import reviews from '/server/exampleData/reviews.json';
import reviewData from '/server/exampleData/reviewData.json';


const FoldWrapper = styled.section`
margin: auto;
width: 90vw;
background: papayawhip;
`;

const BelowFoldWrapper = styled.section`
margin: auto;
width: 80vw;
background: lightgrey;
`;


const ItemPage = () => {
  /**~~~~~Default Values are blanked or filled with placeholders in order to load in the skeleton before API response~~~~*/
  const [product, updateProduct] = useState({name:""})
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
      {/* <FoldWrapper>
        <Overview product={product}/>
      </FoldWrapper> */}
      <BelowFoldWrapper>
        {/* <Related /> */}
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