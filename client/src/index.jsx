import React from "react";
import styled from "styled-components";
import { render } from "react-dom";
import Reviews from "./components/Reviews";

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