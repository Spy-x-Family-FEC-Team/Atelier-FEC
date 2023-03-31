import React, {useState} from "react";
import styled from "styled-components";
import StarRating from "/client/src/components/assets/StarRating.jsx";
import OverlayWindow from "/client/src/components/assets/OverlayWindow.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import {Colors} from '/client/src/components/assets/GlobalStyles.js';

const ReviewCard = styled.div`
  margin: 2vh;
  border-bottom: 1px solid ${Colors.verdegris};
`


const Topmost = styled.div`
  display: grid;
	grid-template-columns: 34% 66%;
  grid-template-rows: 30px;
`

const ReviewSummary = styled.div`
  font-weight: 600;
`

const NameAndDate = styled.div`
  text-align: end;
  text-overflow: ellipsis;
  overflow: hidden;
`

const ButtonSection = styled.div`
  display: grid;
  grid-template-columns: 50% 20% 30%;
  place-items: center;
  overflow: hidden;
  height: 10vh;
`

const MarginlessButton = styled.button`
  margin: 0;
`


const ReviewBody = styled.section`
`; //tbd on stiling, originally had this here for overflow elements, but probably gonna style it eventually

const ThumbnailContainer = styled.section`
  height: 10vh;
  display: flex;
  justify-content: space-around;
`;

const ThumbnailPic = styled.img`
  height: 100%;
  max-width: 100%;
  border-radius: 5px;
`;

const OverlayPic = styled.img`
  max-height: 80vh;
  max-width: 80vw;
  border-radius: 8px;
`;



const ReviewListItem = ({data}) => {
  const [expanded, setExpanded] = useState(false);
  const [imageOverlay, setImageOverlay] = useState(null);
  const clearImageOverlay = () => {setImageOverlay(null)}
  const toggleExpanded = () => {setExpanded((ex) => (!ex))};
  const imageClick = (event) => {setImageOverlay(event.target.getAttribute('src'))}

  return(
  <ReviewCard>
    <Topmost>
      <div><StarRating rawRating={data.rating} color="orange"/></div>
      <NameAndDate>{data.reviewer_name} {new Date(data.date).toDateString()}</NameAndDate>
    </Topmost>
    <ReviewSummary>{data.summary}</ReviewSummary>
    <ReviewBody>{data.body.slice(0,(expanded ? undefined : 250)) // kinda wanna find a nice split function to put here
    }</ReviewBody>
    {(data.body.length > 250 && !expanded) ? <button type="button" onClick={toggleExpanded}>Show More</button> : null // probably some logic and state to figure out here
    }

    {data.photos.length ?
    <ThumbnailContainer>
      {data.photos.map((photo) => (
        <ThumbnailPic
          key={photo.id}
          src={photo.url}
          title={`A user submitted photo with the id ${photo.id}`}
          onClick={imageClick}/>))}
    </ThumbnailContainer>
    : null}
    {data.response ? <div><h3>Store Response:</h3>{data.response}</div>: null}
    {data.recommend ? <div><FontAwesomeIcon icon={solid("square-check")}/> I recommend this product.</div> : null}
    <ButtonSection>
      <div>
        <b>Was this review helpful?</b>
      </div>
      <div>
        <MarginlessButton type="button" onClick={() => {console.log('clicked a review list yes button')}}>Yes</MarginlessButton>
      </div>
      <div>
        <button type="button" onClick={() => {console.log('clicked a review list report button')}}>Report</button>
      </div>
    </ButtonSection>
    {imageOverlay ?
    <OverlayWindow onBgClick={clearImageOverlay}>
      <OverlayPic src={imageOverlay}/>
    </OverlayWindow>
    : null}
  </ReviewCard>)
}

export default ReviewListItem;
/* Individual Review Tile
Each review will be displayed on a single tile within the list. The tile will display the following information:
Star Rating - This will be the rating given to the product by this individual review.. The rating will be displayed in the format of solid or outlined stars, where the solid stars represent the review score. A total of 5 stars should always appear, and the amount filled in should correspond to the average score.
The visual for rating should be representative of up to a quarter of a review point. For example, if the average is 3.8, this should display as 3¾ solid stars and 1¼ outlined stars.
Date of review - The date the review was written should appear in the format “Month DD, YYYY”
Review Summary - Reviews submitted will have a one sentence summary. This single sentence will be capped at 60 characters. On the review tile, this summary will appear in bold font above the full review.
Review Body - The review body will be a free-form multimedia input where the user can submit text and images regarding their experience with the product.
The text submitted as part of the review will be between 50 and 1000 characters long.
Users should be able to submit up to 5 images along with a single review.
By default the first 250 characters of the review should display. If the review is longer than 250 characters, below the body a link reading “Show more” will appear. Upon clicking this link, the review tile should expand and the rest of the review should display.
Any images that were submitted as part of the review should appear as thumbnails below the review text. Upon clicking a thumbnail, the image should open in a modal window, displaying at full resolution. The only functionality available within this modal should be the ability to close the window.
Recommend - If the reviewer recommends buying the product, the text “I recommend this product” and a checkmark icon will display below the review. If the reviewer does not recommend the product, nothing will display here.
Reviewer name - The username for the reviewer will appear. Only the username will appear. No email addresses or other personal information will display. However, if the user’s email is associated with a sale in the system then next to the username the text “Verified Purchaser” will appear.
Response to Review - Our internal sales team has the ability to respond to any reviews written. If the review has a corresponding response, this should appear below the reviewer name. The response should be preceded by the text “Response from seller”, and should be visually distinguished from the rest of the review.
Rating Helpfulness - Any user on the site will have the ability to provide feedback on whether reviews are helpful. At the bottom of the review the text “Was this review helpful?” will precede two links “Yes (#)” and “No (#)”. Following “Yes” and “No” will be the count of users that have selected that button. Clicking either link should cast a vote for that selection.
A user on the site does not need to be logged in to provide feedback on helpfulness.
A user can provide feedback on any review. However, they can only make one submission for each review. If the user selects either “Yes” or “No” for a review, they should not be able to select another option again for that review.

*/