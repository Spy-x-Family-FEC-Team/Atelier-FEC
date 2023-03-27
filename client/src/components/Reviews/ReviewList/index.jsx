import React, { useState } from "react";
import ReviewListItem from "./ReviewListItem"
import styled from "styled-components";

const ReviewListGridStyling = styled.div`
grid-column-start: 2;
grid-column-end: 3;
grid-row-start: 1;
grid-row-end: 2;
max-height: 80vh;
width: 100%
overflow-y: overlay;
overflow-x: hidden;
overflow-wrap: break-word;
`;

const ReviewList = (props) => {
  const [moreReviews, setMoreReviews] = useState(false); // flag for loading more reviews
  const toggleMore = () => setMoreReviews((more) => (!more))

  return (
  <ReviewListGridStyling
    id="ReviewList"
  >
    <h2>User Reviews</h2>
    {props.reviews.results
    .slice(0, (moreReviews ? undefined : 2)) // this slice should do nothing if we want more reviews, and should slice to 2 reviews otherwise
    .map((rev) => <ReviewListItem key={rev.review_id} data={rev}/>) // turn those array items into react elements
    }
    {props.reviews.results.length > 2 ? <button type="button" onClick={toggleMore}>{moreReviews ? "Less Reviews" : "More Reviews"}</button> : null }
  </ReviewListGridStyling>);
}

export default ReviewList;

/*
Reviews List
The heart of the Ratings and Reviews module will be the list of reviews available for the user to read. This list will display all the reviews that have been submitted for the product being viewed.
The reviews within this list will be displayed on tiles of a standard size (the contents of this tile are described in section 1.2.2).
The list should display 2 tiles at a time. If there are more than 2 reviews that have been written for the given product, a button for “More Reviews” will appear below the list.
If there are 2 or less reviews for the given product, then the button will not appear.
Clicking this button will cause up to 2 additional reviews to appear. The list should expand, and the review tiles should show in order below the previously loaded questions.
As long as there are still unloaded reviews, the button will remain below the list. Once all of the reviews for the product have been loaded, the button should no longer appear.
After several loads, the length of the list will become very long. In order to keep the page manageable, the maximum height of the questions list should be capped such that the entire Reviews module should fit on a single screen. The reviews list should become scrollable. The sort dropdown and buttons should remain fixed outside of the scrollable list.
The order in which the reviews appear, as well as whether all or a filtered subset of the reviews appear will be changeable.
If no reviews have been submitted for this product, then the list will collapse, and the button to submit a new review (section 1.2.7) will appear near the top of the module.
Future Enhancement - Instead of incrementally loading 2 reviews at a time, clicking the “More Reviews” button should immediately expand the list to its maximum height. The reviews appearing within should no longer need to be explicitly loaded. Instead, the list should load in an ‘infinite scroll’, where as the user nears the end of the list, additional questions tack on to the bottom.
*/