import React, {useState} from 'react';
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
width: 90%;
background: papayawhip;
`;

const BelowFoldWrapper = styled.section`
margin: auto;
width: 80%;
background: lightgrey;
`;


const ItemPage = () => {
  // const [product, updateProduct] = useState(null)
  // const [reviews, updateReviews] = useState(null)
  // const [reviewData, updateReviewData] = useState(null)

  // These are the axios requests that will eventually be used in the useState stuff above
  // const _id = useParams()['id'];
  // console.log(_id)
  // axios.get(`/api/products/${_id}`)
  //   .then((results) => {
  //     console.log(results)})
  // axios.get(`/api/reviews/${_id}`)
  //   .then((results) => {
  //     console.log(results)})
  // axios.get(`/api/reviews/meta/${_id}`)
  //   .then((results) => {
  //     console.log(results)})

  return(
  <>
    <FoldWrapper>
      <Overview
        product={product}
        reviewData={reviewData}
      />
    </FoldWrapper>
    <BelowFoldWrapper>
      <Related />
      <Reviews
        reviewData={reviewData}
        reviews={reviews}
        name={product.name}
      />
    </BelowFoldWrapper>
  </>)}



const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/items/:id" element={<ItemPage/>}/>
    </Routes>
  </BrowserRouter>
)

ReactDOM.render(
  <App />,
  document.getElementById("root")
);