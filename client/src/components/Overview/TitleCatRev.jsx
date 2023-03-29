import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import StarRating from "../assets/StarRating.jsx";
import { getNumberOfRatings, getMeanRating } from "/client/src/components/sharedComponents/ratingsObjectFunctions.js";

const TitleCatRevWrapper = styled.section`
  display:grid;
  grid-template-rows: 1fr 1fr 2fr;
  z-index:5;
`;

const TitleWrapper = styled.section`
  border-radius: 2px;
`;


const TitleCatRev = (props) => {

  const [numberOfRatings, setNumberOfRatings] = useState(null);
  const [meanRating, setMeanRating] = useState(null);

  useEffect (() => {
    setNumberOfRatings(getNumberOfRatings(props.data.ratings));
    setMeanRating(getMeanRating(props.data.ratings));
  }, [props.data])

  return(
    <TitleCatRevWrapper>
      {numberOfRatings ?
        <div>
          <StarRating rawRating = {meanRating}/>
          <span>&nbsp;&nbsp;<a href= "#ReviewList">Read all {numberOfRatings} reviews...</a></span>
        </div>
        :null
      }
      <div>{props.category}</div>
      <TitleWrapper>
        <h2>{props.title}</h2>
      </TitleWrapper>
    </TitleCatRevWrapper>
  )
};

export default TitleCatRev;