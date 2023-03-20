










/*
Questions & Answers
The Questions & Answers module will allow asking and answering of questions for the product selected. The functionality contained within this module can be divided into several pieces:
View questions
Search for a question
Asking a question
Answering a question
This component will extend the ability to view and search questions, ask questions, answer questions and provide feedback on questions about the current product.
All questions will be asked and answered per product. Specific styles will not be accounted for within the Questions & Answers module.
Questions List
At the center of the Questions and Answers module will be a list of questions that have been asked about the given product.
The questions and their corresponding answers within this list will be displayed in an expanding and collapsing accordion. By default, on page load up to four questions should be displayed. Up to two answers should display for each question. The remaining questions or answers should be hidden until the user loads them using the “More Answered Questions” button (section 1.3.4).
Questions should appear in order of ‘helpfulness’, corresponding to how many users have indicated that the question was helpful.
The list will contain all questions by default, but will have the potential to be filtered to a subset based on user searches (section 1.3.3).
If no questions have been submitted for this product, then the list will collapse, and the button to submit a new question (section 1.3.5) will appear near the top of the module.
Individual Question
Each question within the list will offer the same information and set of features.
1.3.2.1. Question
The question itself will display at the top, preceded by the text “Q:”
1.3.2.2. Answers List
 A list of answers will appear below the question. The entire answer list will be titled “A:”.
Each answer will start on a new line, where the text body of the answer will display.
Below the answer, the username of the answerer and the date the answer was written will show in the format “by [username], Month DD, YYYY”. If the answer is from the seller, then the username should display “Seller” in bold.
A link should appear next to the text “Helpful?” reading “Yes (#)” with the count of selections for that answer. Clicking on this link should increase the count for that response. A customer should not be able to vote more than once for this selection.
Next to the link for “Helpful?”, a second link reading “Report” will appear. Clicking on this link will mark the answer for internal review. A user should not be able to report an answer more than once. After clicking on this link, the “Report” link should change to static text that reads “Reported”. Answers that have been reported should be marked as such in the system for further action to be taken.
Answers should appear in the order of ‘helpfulness’. However, any answers from the seller should appear at the top of the list. There should be no other sort order for answers.
By default only two answers will show. The rest should be hidden. If more than two answers exist for the question, a link to “See more answers” should display below the list (of answers - this is what they mean by accordion). Clicking on this link should expand the area below the question and display the remainder of the list.
The view for the full list of answers should be confined to half of the screen, and the list within should be scrollable. When expanded, the button to “See more answers” should change to read “Collapse answers”.
Future Enhancement - If time allows, answers should have the capability of supporting image uploads. If an answer submitted includes images, thumbnail images for each image submitted should appear below the answer text body, above the username and other metadata.
 Each image thumbnail should be clickable. Upon clicking the thumbnail, a modal window expanding the image at full resolution should appear over the page. The only functionality within this modal window should be an “X” icon through which the user can close out of the modal.
1.3.2.3. Was this question helpful
Text asking “Helpful?”, should appear in line with the question, followed by a link reading “Yes (#)” with the count of selections for that answer. Clicking on this link should increase the count for that question. A customer should not be able to vote more than once for this selection.
1.3.2.4. Add an answer
Another link should appear next in line with each question titled “Add Answer”. Clicking on this link should open up a modal window containing a form through which answers can be submitted. The details for this modal and answer submission are outlined in section 1.3.6.
Search Questions
A search bar will appear above the questions list. Search terms entered in this text input will filter the list for matching results.
After the user types 3 or more characters into the search bar the results will begin to filter to only those containing matching text. The filter should continue to update as the user adds or removes characters.
The bar should display placeholder text reading “Have a question? Search for answers…”
If the user clears the search term, or removes characters so that less than 3 remain, the list should return to the state where it is not filtered to matching text.
The search filter should work with any other filters or sorts that have been applied, and narrow the results further. Changes to the sort and rating filters should not remove the search term filter.
Future Enhancement - If time allows, any matching text within the reviews should be highlighted as the search term changes and the list is filtered down. The text should appear in the normal black font, surrounded by a yellow highlight. This should only occur after 3 characters are entered, and the list results have been updated.
More Answered Questions
The list will by default only display up to 2 questions asked. If there are more than 2 questions that have been asked for the given product, a button for “More Answered Questions” will appear below the list.
If there are 2 or less questions for the given product, then the button will not appear.
Clicking this button will cause up to 2 additional questions to appear. The list should expand, and the questions should show in order below the previously loaded questions.
As long as there are still unloaded questions, the button will remain below the list. Once all of the questions for the product have been loaded, the button should no longer appear.
After several loads, the length of the list will become very long. In order to keep the page manageable, the maximum height of the questions list should be capped such that the entire Questions & Answers module should fit on a single screen. The questions list should become scrollable. The search bar and buttons should remain fixed outside of the scrollable list.
Future Enhancement - Instead of incrementally loading 2 questions at a time, clicking the “More Answered Questions” button should immediately expand the list to its maximum height. The Questions appearing within should no longer need to be explicitly loaded. Instead, the list should load in an ‘infinite scroll’, where as the user nears the end of the list, additional questions tack on to the bottom.
Add a Question
At the bottom of the Questions & Answers module, a button will appear allowing users to create a new question for the product. This button should always be available on any product page.
Upon clicking the button a modal window should open, overlaying the product page. The modal should be titled “Ask Your Question” and subtitled “About the [Product Name Here]”. The product name should be inserted into the subtitle.
The following inputs should appear on the question form. Each should be labeled as titled below. Those indicated as mandatory should have an asterisk next to the title.
1.3.5.1. Your Question (mandatory)
This text input should be a large text window allowing up to 1000 characters.
1.3.5.2. What is your nickname (mandatory)
A text input allowing up to 60 characters for the user’s display name.
Placeholder text should read: “Example: jackson11!”.
Below this field, the text “For privacy reasons, do not use your full name or email address” will appear.
1.3.5.3. Your email (mandatory)
A text input allowing up to 60 characters.
Placeholder text should read: “Example: jackson11@email.com”.
Below this field, the text “For authentication reasons, you will not be emailed” will appear.
1.3.5.4. Submit question (button)
A button by which the question can be submitted.
Upon selecting this button the form’s inputs should be validated. If there are any invalid entries, the submission should be prevented, and a warning message will appear. This message should be titled “You must enter the following:”
This error will occur if :
Any mandatory fields are blank
The email address provided is not in correct email format
Add an Answer Modal
Through the link provided on each question within the Questions list, users will be allowed to submit an answer for the product.
Upon clicking the button a modal window should open, overlaying the product page. The modal should be titled “Submit your Answer”. The modal should be subtitled: “[Product Name]: [Question Body]” . The appropriate product name and question body should be inserted into the subtitle.
The following inputs should appear on the question form. Each should be labeled as titled below. Those indicated as mandatory should have an asterisk next to the title.
1.3.6.1. Your Answer (mandatory)
This text input should be a large text window allowing up to 1000 characters.
1.3.6.2. What is your nickname (mandatory)
A text input allowing up to 60 characters for the user’s display name.
Placeholder text should read: “Example: jack543!”.
Below this field, the text “For privacy reasons, do not use your full name or email address” will appear.
1.3.6.3. Your email (mandatory)
A text input allowing up to 60 characters.
Placeholder text should read: “Example: jack@email.com”.
Below this field, the text “For authentication reasons, you will not be emailed” will appear.
1.3.6.4. Upload your photos
A button will appear allowing users to upload their photos to the form. Up to five photos should be allowed for each answer.
Clicking the button should open a separate window where the photo to be can be selected.
After the first image is uploaded, a thumbnail showing the image should appear. A user should be able to add up to five images before the button to add disappears, preventing further additions.
1.3.6.5. Submit answer (button)
A button by which the answer can be submitted.
Upon selecting this button the form’s inputs should be validated. If there are any invalid entries, the submission should be prevented, and a warning message will appear. This message should be titled “You must enter the following:”
This error will occur if:
Any mandatory fields are blank
The email address provided is not in correct email format
The images selected are invalid or unable to be uploaded.
*/