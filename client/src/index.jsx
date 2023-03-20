import React from "react";
import styled from "styled-components";
import { render } from "react-dom";
import Related from "./components/Related";
import Overview from "./components/Overview/index";
import Reviews from "./components/Reviews";
import StarRating from "./components/assets/StarRating.jsx";

// Dummy data access. Figured out we needed to change the filetype to .json. Feel free to add the others if you want to use them.
import product from '../../server/exampleData/product.json';

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



const App = () => (
<>
  <FoldWrapper>
    <Overview product={product}/>
  </FoldWrapper>
  <BelowFoldWrapper>
    <Related />
    <StarRating rawRating={3.7}/>
    <Reviews/>
</BelowFoldWrapper>
</>
)

render(
  <App/>,
  document.getElementById("root")
);