import React from 'react';
import styled from 'styled-components';
import StarRating from "../assets/StarRating.jsx";

// const ImageWrapper = styled.section`
//   max-height: 70vh;
//   width: auto;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;
// A lot of the style stuff above is redundant, but I just want to make sure this works and can refactor later.

const TitleCatRev = (props) => {

  return(
    <div>
      <StarRating rawRating={3.7}/>
      <h2>{props.title}</h2>
      <h3>{props.category}</h3>

    </div>
  )

};

export default TitleCatRev;