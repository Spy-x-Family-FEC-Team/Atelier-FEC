import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import StarRating from "../assets/StarRating.jsx";
import { getNumberOfRatings, getMeanRating } from "/client/src/components/sharedComponents/ratingsObjectFunctions.js";

const TitleCatRevWrapper = styled.section`
  display:grid;
  grid-template-rows: 1fr 1fr 2fr;
  z-index:5;
  height:15vh;
`;

const TitleWrapper = styled.section`
  font-family:Georgia;
  font-size:2.8rem;
  font-weight:bold;
  // padding-bottom:15px;
  // margin-bottom:15px;
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
          <StarRating style={{color:"#329FA9"}} rawRating = {meanRating}/>
          <span>&nbsp;&nbsp;<a href= "#ReviewList" style={{color:"#23493F"}}>Read all {numberOfRatings} reviews...</a></span>
        </div>
        :null
      }
      <div>{props.category}</div>
      {/* This hidden h1 is for accessibility, but h1 was causing styling issues for the rendered title. */}
      <h1 hidden>{props.title}</h1>
      <TitleWrapper>
        {props.title}
      </TitleWrapper>
    </TitleCatRevWrapper>
  )
};

export default TitleCatRev;