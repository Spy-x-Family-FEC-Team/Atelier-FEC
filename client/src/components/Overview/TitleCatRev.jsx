import React from 'react';
// import styled from 'styled-components';
import StarRating from "../assets/StarRating.jsx";
import { getNumberOfRatings, getMeanRating } from "/client/src/components/sharedComponents/ratingsObjectFunctions.js";

// const TitleCatRevWrapper = styled.section`

// `;


const TitleCatRev = (props) => {

  var numberOfRatings = getNumberOfRatings(props.data.ratings);
  var meanRating = getMeanRating(props.data.ratings);

  return(
    <div>
      <StarRating rawRating = {meanRating}/>
      <span>&nbsp;&nbsp;<a href= "#ReviewList">Read all {numberOfRatings} reviews...</a></span>
      <p>{props.category}</p>
      <h2>{props.title}</h2>
    </div>
  )
};

export default TitleCatRev;