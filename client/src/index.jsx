import React from "react";
import styled from "styled-components";
import { render } from "react-dom";
import Overview from "./components/Overview/index";
import Reviews from "./components/Reviews";
import StarRating from "./components/assets/StarRating.jsx";

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
    <Overview/>
  </FoldWrapper>
  <BelowFoldWrapper>
    <StarRating rawRating={3.7}/>
  <Reviews/>
</BelowFoldWrapper>
</>
)

render(
  <App/>,
  document.getElementById("root")
);