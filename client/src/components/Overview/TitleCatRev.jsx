import React, {useState, useEffect} from 'react';
// import styled from 'styled-components';
import StarRating from "../assets/StarRating.jsx";
import { getNumberOfRatings, getMeanRating } from "/client/src/components/sharedComponents/ratingsObjectFunctions.js";

// const TitleCatRevWrapper = styled.section`

// `;


const TitleCatRev = (props) => {

  const [numberOfRatings, setNumberOfRatings] = useState(null);
  const [meanRating, setMeanRating] = useState(null);

  useEffect (() => {
    setNumberOfRatings(getNumberOfRatings(props.data.ratings));
    setMeanRating(getMeanRating(props.data.ratings));
  }, [props.data])

  return(
    <div>
      {numberOfRatings ?
        <div>
          <StarRating rawRating = {meanRating}/>
          <span>&nbsp;&nbsp;<a href= "#ReviewList">Read all {numberOfRatings} reviews...</a></span>
        </div>
        :null
      }
      <p>{props.category}</p>
      <h2>{props.title}</h2>
    </div>
  )
};

export default TitleCatRev;