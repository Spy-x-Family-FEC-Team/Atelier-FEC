import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import {Colors} from "/client/src/components/assets/GlobalStyles.js";

const BasicStar = (props) => (<FontAwesomeIcon className={props.className} icon={solid('star')}/>)
const BasicEmptyStar = (props) => (<FontAwesomeIcon className={props.className} icon={regular('star')}/>)
const BasicHalfStar = (props) => ( <FontAwesomeIcon className={props.className} icon={solid('star-half-stroke')}/> );
const EmptyStar = styled(BasicEmptyStar)`
  ${props => props.color ? "color: " + props.color : "" || ""};
`
const HalfStar = styled(BasicHalfStar)`
${props => props.color ? "color: " + props.color : "" || ""};
`
const Star = styled(BasicStar)`
  ${props => props.color ? "color: " + props.color : "" || ""};
`;
const QuarterStar = styled(Star)`
  clip-path: polygon(0% 40%, 0% 100%, 50% 100%, 50% 55%);
`;
const QuarterStarStroke = ({color}) => (
  <span className="fa-layers fa-fw">
    <QuarterStar color={color}/>
    <EmptyStar color={color}/>
  </span>)
const ThreeQuarterStar = styled(Star)`
  clip-path: polygon(0% 0%,50% 0%,50% 60%,100% 43%,100% 100%,0% 100%);
`
const ThreeQuarterStarStroke = ({color}) => (
  <span className="fa-layers fa-fw">
    <ThreeQuarterStar color={color}/>
    <EmptyStar color={color}/>
  </span>)

const starSwitcher = (rawRating, color) => {
  var starArray = [null, <QuarterStarStroke color={color}/>, <HalfStar color={color}/>, <ThreeQuarterStarStroke color={color}/>, <Star color={color}/> ]
  return(starArray[Math.round((rawRating-Math.floor(rawRating))*4)])
}

const StarRating = ({rawRating, color}) => (
  <>
    {[...Array(Math.floor(rawRating))].map((e,i) => (<Star key={i + "filled"} color={color}/>)) /*This is one star per integer value of the rating */}
    {starSwitcher(rawRating, color)}
    {[...Array(5-Math.floor(rawRating)-(rawRating-Math.floor(rawRating) >= .125))].map((e,i) => (<EmptyStar key={i + "empty"} color={color}/>))}
  </>
);

export {Star, EmptyStar}

export default StarRating;