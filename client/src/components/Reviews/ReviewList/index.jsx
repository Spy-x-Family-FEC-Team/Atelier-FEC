import React, { useState } from "react";
import ReviewListItem from "./ReviewListItem"
import styled from "styled-components";
import {Colors} from "/client/src/components/assets/GlobalStyles.js"

const ReviewSectionGridStyling = styled.div`
grid-column-start: 2;
grid-column-end: 3;
grid-row-start: 1;
grid-row-end: 2;
height: 100%;
width: 96%;
display: grid;
grid-template-rows: 10% 10% 80%;
`;

const ReviewsStyling = styled.div`
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  overflow-wrap: break-word;
  scrollbar-color: rebeccapurple green;
`

const SortHead = styled.h4`
  display:inline;
`

const MoreWrapper = styled.div`
  margin-bottom: 1vh;
`

const sortFunctions = {
  newSort: (a, b) => {
    if ((new Date(a.date) - new Date(b.date)) > 0){
      return -1;
    }
    if ((new Date(a.date) - new Date(b.date)) < 0){
      return 1;
    }
    return 0;
  },

  oldSort: (a, b) => {
    return -1*sortFunctions.newSort(a, b);
  },

  helpfulSort: (a, b) => {
    if (a.helpfulness > b.helpfulness){
      return -1;
    }
    if (a.helpfulness < b.helpfulness){
      return 1;
    }
    return 0;
  },

  unhelpfulSort: (a, b) => {
    return -1*sortFunctions.helpfulSort(a, b);
  },

  relevantSort: (a, b) => {
    // gradually decay the relevance of a thing such that by about 2 months out it's roughly 50% as relevant
    var daysSinceA = (Date.now() -new Date(a.date))/1000/60/60/24
    var relevantMultiplierA = 5-(5*(daysSinceA/(daysSinceA+56)))

    var daysSinceB = (Date.now() -new Date(b.date))/1000/60/60/24
    var relevantMultiplierB = 5-(5*(daysSinceB/(daysSinceB+56))) //56 = 2 months at 28 days per month

    var aRelevance = relevantMultiplierA*(a.helpfulness+1)
    var bRelevance = relevantMultiplierB*(b.helpfulness+1)
    if (aRelevance > bRelevance){
      return -1;
    }
    if (aRelevance < bRelevance){
      return 1;
    }
    return 0;
  },

  irrelevantSort: (a, b) => {
    return -1*sortFunctions.relevantSort(a, b)
  }
}


const ReviewList = (props) => {
  const [moreReviews, setMoreReviews] = useState(false); // flag for loading more reviews
  const [sortKey, setSortKey] = useState(() => ("relevantSort"))
  const toggleMore = () => setMoreReviews((more) => (!more));

  const handleSortDropdown = (event) => {setSortKey(event.target.value)}

  return (
  <ReviewSectionGridStyling id="ReviewList" >
    <h3>User Reviews</h3>
    <div>
      <SortHead>Sort Reviews</SortHead>
      <select name="sortSelect" value={sortKey} onChange={handleSortDropdown}>
        <option value="relevantSort">Relevant</option>
        <option value="helpfulSort">Helpful</option>
        <option value="newSort">New</option>
        <option value="irrelevantSort">Irrelevent</option>
        <option value="unhelpfulSort">Unhelpful</option>
        <option value="oldSort">Old</option>
      </select>
    </div>
    <ReviewsStyling>
      {props.reviews.results
      .sort(sortFunctions[sortKey])
      .filter((rev) => (props.starFilter? rev.rating === props.starFilter: true))
      .slice(0, (moreReviews ? undefined : 2)) // this slice should do nothing if we want more reviews, and should slice to 2 reviews otherwise
      .map((rev) => <ReviewListItem key={rev.review_id} data={rev} refresh={props.refresh}/>) // turn those array items into react elements
      }
      <MoreWrapper>{
        props.reviews.results.length > 2 ? <button type="button" onClick={toggleMore}>{moreReviews ? "Less Reviews" : "More Reviews"}</button> : null }
      </MoreWrapper>
    </ReviewsStyling>
  </ReviewSectionGridStyling>);
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

Sort Options
Users will be able to change this ordering. A dropdown labeled “Sort on'' will contain options on sort order.
The options within the sort drop down should include
Helpful - This sort order will prioritize reviews that have been found helpful. The order can be found by subtracting “No” responses from “Yes” responses and sorting such that the highest score appears at the top.
Newest - This is a straightforward sort based on the date the review was submitted. The most recent reviews should appear first.
Relevant - Relevance will be determined by a combination of both the date that the review was submitted as well as ‘helpfulness’ feedback received. This combination should weigh the two characteristics such that recent reviews appear near the top, but do not outweigh reviews that have been found helpful. Similarly, reviews that have been helpful should appear near the top, but should yield to more recent reviews if they are older.
By default, the reviews in the list should appear in order of relevance. The dropdown should display “Relevant” as the currently selected option.
Upon selecting any of the other options, the dropdown should update to display the current selection, and the list should refresh to show the first results for that sort order.
Changing the sort order will always refresh the reviews list.
The sort selected should persist even when filters are added or removed.
*/