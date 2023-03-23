import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

const Star = ({className}) => (<FontAwesomeIcon className={className} icon={solid('star')}/>) // mask={solid('square-full')}

const QuarterStar = styled(Star)`
  clip-path: polygon(0% 40%, 0% 100%, 50% 100%, 50% 55%);
`;

const QuarterStarStroke = () => (
  <span className="fa-layers fa-fw">
    <QuarterStar/>
    <FontAwesomeIcon icon={regular("star")}/>
  </span>)

const ThreeQuarterStar = styled(Star)`
  clip-path: polygon(0% 0%,50% 0%,50% 60%,100% 43%,100% 100%,0% 100%);
`

const ThreeQuarterStarStroke = () => (
  <span className="fa-layers fa-fw">
    <ThreeQuarterStar/>
    <FontAwesomeIcon icon={regular("star")}/>
  </span>)

const starSwitcher = (rawRating) => {
  var starArray = [null, <QuarterStarStroke/>, <FontAwesomeIcon icon={solid('star-half-stroke')}/>, <ThreeQuarterStarStroke/>, <Star/> ]
  return(starArray[Math.round((rawRating-Math.floor(rawRating))*4)])
}

const StarRating = ({rawRating}) => (
  <>
    {[...Array(Math.floor(rawRating))].map((e,i) => (<FontAwesomeIcon key={i + "filled"} icon={solid('star')}/>)) /*This is one star per integer value of the rating */}
    {starSwitcher(rawRating)}
    {[...Array(5-Math.floor(rawRating)-(rawRating-Math.floor(rawRating) >= .125))].map((e,i) => (<FontAwesomeIcon key={i + "empty"} icon={regular('star')}/>))}
  </>
);

export default StarRating;