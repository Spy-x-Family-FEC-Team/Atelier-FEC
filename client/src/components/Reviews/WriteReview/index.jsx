import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import OverlayWindow from "/client/src/components/assets/OverlayWindow.jsx";
import {Star, EmptyStar} from "/client/src/components/assets/StarRating.jsx";

const WriteGridStyling = styled.div`
	color: navy;
	font-weight: bold;
	grid-column-start: 2;
	grid-column-end: 3;
	grid-row-start: 2;
	grid-row-end: 3;
	max-height: 80vh;
	overflow-y: scroll;
	overflow-wrap: break-word;
`;

const InvisibleRadio = styled.input`
	-webkit-appearance: none;
	/* For iOS < 15 to remove gradient background */
	background-color: #fff;
	margin: 0;
	`;

const QuestionLabel = styled.fieldset`
	display:block;
`;

// const StatefulQuestion = (props) => (
// 	<textarea
// 		{props.cols? cols={props.cols} : null}
// 		{props.rows? rows={props.rows} : null}
// 		name="summary"
// 		placeholder="Example: Best purchase ever!"
// 		{props.required? required: null}
// 		value={""}
// 		onChange={""}
// 	/>
// )

const StarRadio = (props) => (
	<label>
		{props.star}
		<InvisibleRadio type="radio" name="starRating" onClick={props.click}/>
	</label>
)

// It may be wise to break this out into something shared others can use for reference.
const traitMessageDictionary = {
	Size: {
		1: "A size too small",
		2: "Half a size too small",
		3: "Perfect",
		4: "Half a size too big",
		5: "A size too big"
	},
	Width: {
		1: "Too narrow",
		2: "Slightly narrow",
		3: "Perfect",
		4: "Slightly wide",
		5: "Too wide"
	},
	Comfort: {
		1: "Uncomfortable",
		2: "Slightly uncomfortable",
		3: "Ok",
		4: "Comfortable",
		5: "Perfect"
	},
	Quality: {
		1: "Poor",
		2: "Below average",
		3: "What I expected",
		4: "Pretty great",
		5: "Perfect"
	},
	Length: {
		1: "Runs Short",
		2: "Runs slightly short",
		3: "Perfect",
		4: "Runs slightly long",
		5: "Runs long"
	},
	Fit: {
		1: "Runs tight",
		2: "Runs slightly tight",
		3: "Perfect",
		4: "Runs slightly long",
		5: "Runs long"
	}
}


const WriteReview = (props) => {
	/*~~~~~~State Definitions~~~~~~*/
	const [modal, setModal] = useState(false);
	const toggleModal = () => {setModal((value) => (!value))}
	const [form, setForm] = useState(
		{
			rating: 0,
			recommend: null,
			characteristics: {},
			summary: "",
			body: "",
			nickname: "",
			email: "",
		}) //Characteristics aren't checked on API call, so I'm just gonna add them to the state as the form is filled out

	/*~~~~~~State Update Functions~~~~~~*/
	// spread the old form data state and spread your new info into it
	const changeFormWithObject = (obj) => {setForm((originalForm) => ({...originalForm, ...obj}))}

	const setStarRating = (val) => (
		changeFormWithObject({rating:val})
	)
	const handleRadioButton = (event, value) => {changeFormWithObject({[event.target.name]:value})};

	// this one's gonna be kinda gross looking cause of nested objects =T
	// So it's 'reset the original form such that the only thing that's changed is the characteristics[section] = buttonvalue
	const radioCharacteristics = (event) => {
		setForm((originalForm) => (
			{...originalForm, characteristics:
				{...originalForm.characteristics, [event.target.name]:parseInt(event.target.value)}
			}))
		}
	const radioBool = (event) => {handleRadioButton(event, (event.target.value === 'true'))}

	//slightly legacy function, may prove useful later:
	const radioInt = (event) => {handleRadioButton(event, parseInt(event.target.value))}


	const handleInputChange = (event) => {changeFormWithObject({[event.target.name]:event.target.value})}


	const handleFormSubmit = (event) => {
		event.preventDefault();
		// submit the form
		axios.post(`/api/reviews`, {
			"product_id": props.product.id,
			"rating": form.rating,
			"summary": form.summary,
			"body": form.body,
			"recommend": form.recommend,
			"name": form.nickname,
			"email": form.email,
			"photos": [],
			"characteristics": {}
		}).then((results) => {
			// blank the form
			setForm({
				rating: 0,
				recommend: null,
				characteristics: {},
				summary: "",
				body: "",
				nickname: "",
				email: "",
			})
			setModal(false)
			props.refresh()
			// reload relevant data
		}).catch((err) => {
			console.log(err)
		})
		// use the callback that the
		//
	}
	/*~~~~~~The actual return~~~~~~*/
	return(
	<>
		<WriteGridStyling>
			<button type="button" onClick={toggleModal}>Write Your Own Review</button>
		</WriteGridStyling>
		{modal ?
		<OverlayWindow onBgClick={toggleModal}>
			<div>Write your review </div>
			<div>About the {props.product.name}</div>
			<form onSubmit={handleFormSubmit}>
				<QuestionLabel>Overall Rating*
					{[...Array(5)].map((e, i) => (
						<StarRadio star={i+1<=form.rating ? <Star/> : <EmptyStar/>} key={i+1} click={setStarRating.bind(this, i+1)}/>
					))}
					{[null, "Poor", "Fair", "Average", "Good", "Great" ][form.starRating]}
				</QuestionLabel>
				<QuestionLabel>Do you recommend this product?*
					<label>Yes
						<input type="radio" name="recommend" value="true" checked={form.recommend === true} onChange={radioBool}/>
					</label>
					<label>No
						<input type="radio" name="recommend" value="false" checked={form.recommend === false} onChange={radioBool}/>
					</label>
				</QuestionLabel>
				<QuestionLabel>Characteristics*:
					{Object.keys(props.data.characteristics).map((trait) => (
						<QuestionLabel key={trait}> {trait}
							{[...Array(5)].map(((e, i) => (

									<input key={trait + (i+1)} type="radio" name={trait} value={i+1} checked={form.characteristics[trait] === i+1} onChange={radioCharacteristics}/>
							)))}
							<p>{form.characteristics[trait]? traitMessageDictionary[trait][form.characteristics[trait]] : null}</p>
						</QuestionLabel>)
					)}
				</QuestionLabel>
				<QuestionLabel>Review Summary:
					<textarea
						cols="48"
						rows="3"
						name="summary"
						placeholder="Example: Best purchase ever!"
						autoComplete="off"
						value={form.summary}
						onChange={handleInputChange}
					/>
				</QuestionLabel>

				<QuestionLabel>Review Body*:
          <textarea
            cols="48"
            rows="3"
            name="body"
            placeholder="Why did you like or dislike this product?"
            required
            autoComplete="off"
            value={form.body}
            onChange={handleInputChange}

          />
					<p>{form.body.length < 60 ? `Minimum required characters left: ${60-form.body.length}`:  `Minimum reached`}</p>
				</QuestionLabel>
				<QuestionLabel>Photos:
					<input/>
				</QuestionLabel>
				<QuestionLabel>What is your nickname?*
          <input
            type="text"
            name="nickname"
            placeholder="Example: jackson11!"
            required
            autoComplete="off"
            value={form.nickname}
            onChange={handleInputChange}
          />
				</QuestionLabel>
				<QuestionLabel>Email*
          <input
            type="text"
            name="email"
            placeholder="Example: jackson11@email.com"
            required
            autoComplete="off"
            value={form.email}
            onChange={handleInputChange}
          />
				</QuestionLabel>
				< input type="submit" value="Submit" />
			</form>
		</OverlayWindow>
		: null}
	</>)
	}

export default WriteReview;

/*

Write New Review
At the bottom of the Ratings & Reviews module, a button will appear allowing users to create new reviews for the product. This button should always be available on any product page.
Upon clicking the button a modal window should open, overlaying the product page. The modal should be titled “Write Your Review” and subtitled “About the [Product Name Here]”. The product name should be inserted into the subtitle.
The following inputs should appear on the review form. Each should be labeled as titled below. Those indicated as mandatory should have an asterisk next to the title.
1.2.6.1. Overall rating (mandatory)
The overall rating will be selected via five selectable star icons. Initially, the stars will all be outlines, and none will be solid. Clicking on a star will fill that star and all of the stars to the left of it with solid color. Customers will not be able to select fractions of a star. After selecting a star, text will appear to the right of the stars explaining the meaning of the selection. The text will vary as follows:
	1 star - “Poor”
	2 stars - “Fair”
	3 stars - “Average”
	4 stars - “Good”
	5 stars - “Great”
1.2.6.2. Do you recommend this product? (mandatory)
Recommendation will be captured via a radio button array of “Yes” and “No”. Default radio button behavior will apply.
1.2.6.3. Characteristics (mandatory)
Any characteristics designated as applicable for the current product will appear in this area. For these inputs, the title will be the characteristic title.
This input will appear as an array of five radio buttons. The meaning of the lowest (1) and highest (5) selection will appear below the array of radio buttons.
By default, no button will be selected.
Above the five buttons, the meaning of the current selection will be explicitly presented. The default will be “none selected”. After making a selection, this should update as applicable for the given characteristic. The meaning of the selections is outlined below:


1
2
3
4
5
Size
A size too small
½ a size too small
Perfect
½ a size too big
A size too wide
Width
Too narrow
Slightly narrow
Perfect
Slightly wide
Too wide
Comfort
Uncomfortable
Slightly uncomfortable
Ok
Comfortable
Perfect
Quality
Poor
Below average
What I expected
Pretty great
Perfect
Length
Runs Short
Runs slightly short
Perfect
Runs slightly long
Runs long
Fit
Runs tight
Runs slightly tight
Perfect
Runs slightly long
Runs long

1.2.6.4. Review summary
A text input allowing up to 60 characters.
Placeholder text should read: “Example: Best purchase ever!”
1.2.6.5. Review body (mandatory)
A text input allowing up to 1000 characters.
Placeholder text should read: “Why did you like the product or not?”.
The review must be over 50 characters long in order to be submitted. If the user tries to submit a review shorter than 50 characters, then the submission should fail in the same manner as it would for a blank mandatory field.
Below the input for the Review body, a counter should appear. This counter should let the user know how many characters are needed to reach the 50 character minimum. It should appear in the format “Minimum required characters left: [##]”. As the user types, the count of characters should update. After the user reaches 50 characters, the counter should be replaced by a message stating “Minimum reached”.

1.2.6.6. Upload your photos
A button will appear allowing users to upload their photos to the form.
Clicking the button should open a separate window where the photo to be can be selected.
After the first image is uploaded, a thumbnail showing the image should appear. A user should be able to add up to five images before the button to add disappears, preventing further additions.

1.2.6.7. What is your nickname (mandatory)
A text input allowing up to 60 characters for the user’s display name.
Placeholder text should read: “Example: jackson11!”.
Below this field, the text “For privacy reasons, do not use your full name or email address” will appear.

1.2.6.8. Your email (mandatory)
A text input allowing up to 60 characters.
Placeholder text should read: “Example: jackson11@email.com”.
Below this field, the text “For authentication reasons, you will not be emailed” will appear.
1.2.6.9. Submit review (button)
A button by which the review can be submitted.
Upon selecting this button the form’s inputs should be validated. If there are any invalid entries, the submission should be prevented, and a warning message will appear. This message should be titled “You must enter the following:”
This error will occur if:
Any mandatory fields are blank
The review body is less than 50 characters
The email address provided is not in correct email format
The images selected are invalid or unable to be uploaded.
*/