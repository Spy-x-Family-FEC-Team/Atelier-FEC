import React from "react";
import styled from "styled-components";
import StarRating from "/client/src/components/assets/StarRating.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { getNumberOfRatings, getMeanRating } from "/client/src/components/sharedComponents/ratingsObjectFunctions.js";
import {Colors} from "/client/src/components/assets/GlobalStyles.js"
import traitMessageDictionary from "/client/src/components/sharedComponents/traitMessageDictionary.js";

// TODO: Break this apart into smaller bits when it gets chubby

const RatingsNumber = styled((props) => (
  <h2 className={props.className}>{props.value + "/5"}</h2>
))`
`;

const EmptyBar = styled.div`
  margin-left: 2vw;
  background-color: ${Colors.snow};
  border: 1px solid;
  border-radius: 8px;
`;

const PercentBar = styled.div`
  background-color: ${Colors.brunswick};
  height: 18px;
  width: ${props => props.percent || 0}%;
  border-radius: 7px;
  color: ${Colors.snow};
  text-align: center;
  font-size: ${props => props.percent > 0 ? 0.7 : 0 || 0}rem;
`;

const FactorBar = styled.div`
  position: relative;
  margin-top: 1vh;
  margin-left: 2.3vw;
  margin-bottom: 1.5vh;
  height: 3px;
  background-color: ${Colors.verdegris};
  border-radius: 8px;
`

const BasicFactorIndicator = (props) => (<FontAwesomeIcon className={props.className} icon={solid('arrow-up')}/>)

const FactorIndicator = styled(BasicFactorIndicator)`
  position: absolute;
  bottom: -15px;
  left: calc(${props => props.percent || 0}% - 6px);
  color: ${Colors.brunswick};
`

const FactorText = styled.i`
  position: absolute;
  bottom: -6px;
`

const FactorTextLeft = styled(FactorText)`
  left: 0%;
`

const FactorTextRight = styled(FactorText)`
  transform-origin: right;
  right: 0%;
`

const RatingsGridbox = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 3;
  max-height: 80vh;
  width: 100%;
  padding-right: 0.8vw;
  border-right: 1px solid ${Colors.verdegris};
`;


const Ratings = ({data, updateFilter}) => {
  var numberOfRatings = getNumberOfRatings(data.ratings)
  var meanRating = getMeanRating(data.ratings)

  return(
  <RatingsGridbox>
    <h3>Summary</h3>
    <div>
      <RatingsNumber value={meanRating} />
      <StarRating rawRating = {meanRating} color="orange"/>
    </div>
    <div>
      <h4>Rating Breakdown</h4>
      {[5,4,3,2,1].map((value) => (
        <div key={`${value}StarRatings`} onClick={updateFilter.bind(this, value)}> {value} Stars
          <EmptyBar>
            <PercentBar percent={(data.ratings[value]/numberOfRatings)*100}>
              {Math.round((data.ratings[value]/numberOfRatings)*100) + "%"}
            </PercentBar>
            {/* number of ratings of N stars divided by total number of ratings times 100 */}
          </EmptyBar>
        </div>)
      )}
    </div>
    <div>
      <h4>Factor Breakdown</h4>
      {Object.keys(data.characteristics).map((key) => (
        <div key={key}>{key}
          <FactorBar >
            {/* <PercentBar percent={(data.characteristics[key].value*20)}/> */}
            <FactorIndicator percent={(data.characteristics[key].value*20)}/>
            <FactorTextLeft>{traitMessageDictionary[key][1]}</FactorTextLeft>
            <FactorTextRight>{traitMessageDictionary[key][5]}</FactorTextRight>
          </FactorBar>
        </div>))
      }
    </div>
  </RatingsGridbox>)
};

export default Ratings;

/*
Rating Breakdown (Filtering)
A breakdown of the ratings received for the product will double as the filtering options for the reviews list. This breakdown will display at the top left corner of the Rating and Reviews module.
1.2.4.1. Rating summary
The top of the breakdown will simply display the average rating for the product. The rating should be displayed both as a number value as well as represented by star icons.
The number displayed should be rounded to the nearest single decimal.
The average rating of the product will be displayed in the format of solid or outlined stars, where the solid stars represent the review score. A total of 5 stars should always appear, and the amount filled in should correspond to the average score.
The visual for rating should be representative of up to a quarter of a review point. For example, if the average is 3.8, this should display as 3¾ solid stars and 1¼ outlined stars.
Additionally, the count of total reviews should be listed.
1.2.4.2. Breakdown
Below the average rating, a section titled “Rating Breakdown” will appear. Within this section, the rating distribution will be broken down.
5 bars will appear; one for each of the star ratings that a customer can give to a product. To the left of the bar, the star count will be explicitly stated in the form “# Stars”.
To the right of the bar, a label with the total number of reviews submitted with that particular rating will be shown. Only the count will show.
The bar itself will be two toned, green and gray. The portion of the bar which is green will represent the percentage of total reviews which have been submitted that have that particular star rating. For example, if a product has received 200 reviews and 150 are 5 stars, then the “5 stars” bar should be three quarters green.
The green portion of the bar should always be left of the gray portion.
If all the reviews submitted for a product are the same rating, then the bar for that star rating will be completely green and the other bars will be completely gray.
Each rating breakdown, consisting of the label, the bar, and the count, will act as a filter. Clicking on the breakdown for a star count will filter the reviews list so that only reviews of that rating display. Hovering over this breakdown will change the background color to indicate it is actionable.
The filters will be additive. If the list has already been filtered for 1 star reviews, clicking on the “2 star” breakdown will update the reviews list such that 1 and 2 star reviews are displayed.
The filters will be toggled on and off with each click. Clicking a second time on a rating breakdown will remove the filter for that rating type. If this action removes the last or only filter, then the list should return to its default state and all reviews should be shown.
Once one or more filters have been applied, a message will appear below the “Rating Breakdown” title. It will state the filters that have been currently applied. It will also include a link to “Remove all filters”. Clicking on this link will remove any filters applied and return the list to the default state.
1.2.4.3. Recommendations
The percentage of reviews that ‘recommend’ the product will be displayed below the breakdown.
Product Breakdown (Factors)
Reviews will provide the ability to give feedback on specific characteristics of the product. The characteristics include Size, Width, Comfort, Quality, Length, and Fit. One or more of these may be relevant for a product. In the Reviews module, the average feedback received will be displayed for all characteristics which apply to the product.
Feedback for characteristics will be on a 5 point scale. The range of this scale will depend on the characteristic in question. For example, Size can range from (1) “too small” to (5) “too big”, with the middle option (3) being “perfect”. Using the same 5 point scale for Quality, however, the scale would range from (1) “poor” to (5) “great”.
Regardless of what the range of the scale represents, the 5 point scale will display the same for all of the characteristics of the product. Each will appear as a gray bar similar to the rating breakdown. Above the bar, a label will state the characteristic. Below the bar, the meaning of the lowest selection (1) and the highest selection (5) will appear. On the bar, a single icon will appear representing the average value received via reviews submitted. The icon should appear horizontally from the left edge of the bar such that it represents the average input for the characteristic. For example, if the average is 5, the icon should appear all the way to the right. An average of 3 should appear in the middle.
*/