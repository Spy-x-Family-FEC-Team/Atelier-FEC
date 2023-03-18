import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';

const StarRating = ({rawRating}) => (
  <>
    {[...Array(Math.floor(rawRating))].map((e,i) => (<FontAwesomeIcon key={i} icon={faStar}/>)) /*This is one star per integer value of the rating */}
    {(rawRating-Math.floor(rawRating) > .5) ? <FontAwesomeIcon icon={faStarHalfStroke}/>: null}
  </>
);

export default StarRating;