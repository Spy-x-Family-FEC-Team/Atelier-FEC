import React, {useState, useEffect} from "react"
import styled from "styled-components";
import Ratings from "./Ratings"
import ReviewList from "./ReviewList"
import WriteReview from "./WriteReview"
import {Colors} from "/client/src/components/assets/GlobalStyles.js"

const ThirdsGrid = styled.section`
	margin-left: 0%;
	display:grid;
	column-gap: 2%;
	grid-template-columns: 34% 64%;
	grid-template-rows: 80vh 10vh;
	max-width: 100%;
	justify-items: stretch;
`;

const SectionWrapper = styled.div`
	border-top: 1px solid ${Colors.lightBlue};
`

const Reviews = (props) => {
	const [starFilter, updateStarFilter] = useState(null);
	return(
		<SectionWrapper>
			<h2>Ratings and Reviews</h2>
			<ThirdsGrid>
				<Ratings data={props.reviewData} updateFilter={updateStarFilter}/>
				<ReviewList reviews={props.reviews} starFilter={starFilter}/>
				<WriteReview data={props.reviewData} product={props.product} refresh={props.refresh}/>
			</ThirdsGrid>
		</SectionWrapper>
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