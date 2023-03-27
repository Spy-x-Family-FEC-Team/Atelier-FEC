import React, {useState, useEffect} from "react"
import styled from "styled-components";
import Ratings from "./Ratings"
import ReviewList from "./ReviewList"
import WriteReview from "./WriteReview"

const ThirdsGrid = styled.section`
	display:grid;
	grid-template-columns: 5fr 11fr;
	grid-template-rows: 9fr 1fr;
`;

const Reviews = (props) => {
	return(
		<ThirdsGrid>
			{props.reviewData ? <Ratings data={props.reviewData}/> : null}
			<ReviewList reviews={props.reviews}/>
			<WriteReview data={props.reviewData} product={props.product}/>
		</ThirdsGrid>
	)
};

export default Reviews;

/* Ratings & Reviews
The Ratings & Reviews module will allow viewing and submission of reviews for the product selected. The functionality contained within this module can be divided into several pieces:
Write new review
Reviews List
Sorting
Rating Breakdown
Product Breakdown
This component will extend the ability to write, read, and browse through reviews for the current product.
All reviews will be saved per product. Specific styles will not be accounted for within the review module.


Keyword search - Low Priority
Above the reviews list, a search bar will allow the user to filter the reviews for any that contain text matching the search term.
After the user types 3 or more characters into the search bar the results will begin to filter to only those containing matching text. The filter should continue to update as the user adds or removes characters.
If the user clears the search term, or removes characters so that less than 3 remain, the list should return to the state where it is not filtered to match text.
The search filter should work with any other filters or sorts that have been applied, and narrow the results further. Changes to the sort and rating filters should not remove the search term filter.
Future Enhancement - If time allows, any matching text within the reviews should be highlighted as the search term changes and the list is filtered down. The text should appear in the normal black font, surrounded by a yellow highlight. This should only occur after 3 characters are entered, and the list results have been updated.
*/