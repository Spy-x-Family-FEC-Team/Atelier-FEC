import React from "react";
import styled from "styled-components";
import StarRating from "../../assets/StarRating.jsx";
import { getNumberOfRatings, getMeanRating } from "../../sharedComponents/ratingsObjectFunctions.js";

// TODO: Break this apart into smaller bits when it gets chubby

const RatingsNumber = styled((props) => (
  <div className={props.className}>{props.value}</div>
))`
font-size: 7vh;
`;

const EmptyBar = styled.div`
  background-color: rgb(171, 157, 163);
`;

const PercentBar = styled.div`
  background-color: rgb(32, 128, 0);
  height: 15px;
  width: ${props => props.percent || 0}%;
`;

const Ratings = (props) => {
  var numberOfRatings = getNumberOfRatings(props.data.ratings);
  var meanRating = getMeanRating(props.data.ratings);
  // var sumOfScores = Object.keys(props.data).reduce((accumulate, current) => (accumulate + props.data[current]*parseInt(current) ), 0); //add all the scores together
  // var numberOfRatings = Object.keys(props.data).reduce((accumulate, current) => (accumulate + props.data[current]), 0); //count the number of scores
  // var meanRating = Math.round(sumOfScores/numberOfRatings*10)/10 // get the mean
  // meanRating = meanRating ? meanRating : 5;
  // console.log(meanRating)

  return(
  <div>
    <div>Ratings and Reviews</div>
    <div>Summary section
      <RatingsNumber value={meanRating} />
      <StarRating rawRating = {meanRating}/>
    </div>
    <div>Rating breakdown
      {[5,4,3,2,1].map((value) => (
        <div key={`${value}StarRatings`}> {value} Stars
          <EmptyBar>
            <PercentBar percent={(props.data.ratings[value]/numberOfRatings)*100}/>
            {/* number of ratings of N stars divided by total number of ratings times 100 */}
          </EmptyBar>
        </div>)
      )}
    </div>
    <div>Factor breakdown
      {Object.keys(props.data.characteristics).map((key) => (
        <div key={key}>{key}
          <EmptyBar>
            <PercentBar percent={(props.data.characteristics[key].value*20)}/>
          </EmptyBar>
        </div>))
      }
    </div>
  </div>)
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