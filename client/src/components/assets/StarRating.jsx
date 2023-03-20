import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used


const StarRating = ({rawRating}) => (
  <>
    {[...Array(Math.floor(rawRating))].map((e,i) => (<FontAwesomeIcon key={i + "filled"} icon={solid('star')}/>)) /*This is one star per integer value of the rating */}
    {(rawRating-Math.floor(rawRating) > .5) ? <FontAwesomeIcon icon={solid('star-half-stroke')}/>: null}
    {[...Array(5-Math.floor(rawRating)-(rawRating-Math.floor(rawRating) > .5))].map((e,i) => (<FontAwesomeIcon key={i + "empty"} icon={regular('star')}/>))}
  </>
);

export default StarRating;