import React from "react";
import styled from "styled-components";
import { render } from "react-dom";
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
    <div>Hello u stinky World</div>
    <div>Overview would go here in the slightly thicker bit</div>
  </FoldWrapper>
  <BelowFoldWrapper>
    <StarRating rawRating={3.7}/>
  {/* <Overview/>
<Related/>
<QnA/> */}
  <Reviews/>
</BelowFoldWrapper>
</>
)

render(
  <App/>,
  document.getElementById("root")
);