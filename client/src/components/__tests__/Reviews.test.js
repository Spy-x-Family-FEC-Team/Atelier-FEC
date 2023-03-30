import React from "react";
import ReactDOM from "react-dom";
import { render, screen, cleanup, fireEvent, within, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Reviews from '/client/src/components/Reviews/index.jsx';
import dummyProduct from '/server/exampleData/product.json'
import dummyReviews from '/server/exampleData/reviews.json';
import dummyReviewData from '/server/exampleData/reviewData.json';
import blankProduct from '/server/exampleData/defaultProduct.json'
import blankReviews from '/server/exampleData/defaultReviews.json';
import blankReviewData from '/server/exampleData/defaultReviewData.json';

const staticSubtests = (page) => {
  page.getByText('Ratings and Reviews');
  page.getByText('Summary Section');
  page.getByText('Rating Breakdown');
  page.getByText('Factor Breakdown');
  page.getByText('Write Your Own Review');
}

afterEach(() => {
  cleanup();
})


test("should correctly render Reviews given blank data", async () => {
  const page = render(<Reviews reviewData={blankReviewData} reviews={blankReviews} product={blankProduct} refresh={() => {console.log('refreshed')}}/>);
  const responses = page.queryAllByText("Was this review helpful?")
  expect(responses.length).toBe(0)

  staticSubtests(page)
})


test("should correctly render Reviews given dummy data", async () => {
  const page = render(<Reviews reviewData={dummyReviewData} reviews={dummyReviews} product={dummyProduct} refresh={() => {console.log('refreshed')}}/>);
  staticSubtests(page)
})


test("should change review lenght on clicking 'more' button", async () => {
  const page = render(<Reviews reviewData={dummyReviewData} reviews={dummyReviews} product={dummyProduct} refresh={() => {console.log('refreshed')}}/>);

  var responses = page.queryAllByText("Was this review helpful?")
  expect(responses.length).toBe(2)
  await userEvent.click(screen.getByText("More Reviews"))
  await waitFor(() => (
    expect(() => {screen.getByText("More Reviews")}).toThrow()
    ))
  var responses = page.queryAllByText("Was this review helpful?")

  expect(responses.length).toBe(567) //thats how many reviews are in the dummy data



})


test("yes and report button should be clickable",  async () => {
  const page = render(<Reviews reviewData={dummyReviewData} reviews={dummyReviews} product={dummyProduct} refresh={() => {console.log('refreshed')}}/>);

  for (let item of screen.getAllByText("Yes")) {
    await userEvent.click(item)
  }
  for (let item of screen.getAllByText("Report Review")) {
    await userEvent.click(item)
  }
})

test("clicking the write review button loads the modal window", async () => {
  const page = render(<Reviews reviewData={dummyReviewData} reviews={dummyReviews} product={dummyProduct} refresh={() => {console.log('refreshed')}}/>);


  await userEvent.click(screen.getByText("Write Your Own Review"))
  // wait for the overlay to load
  await screen.findByText("Overall Rating*")
  page.getByText('Write your review');
  page.getByText('About the', {exact: false});
  page.getByText('Do you recommend this product?*')
  page.getByText('Characteristics*:')
  var allRadioButtons = page.getAllByRole('radio');
  expect(allRadioButtons.length).toBe(27);
  // click a bunch of radio buttons
  [0, 5, 9, 15, 21, 24].forEach(async (val) => {await userEvent.click(allRadioButtons[val])})
  // expect(page.getAllByRole('radio', {checked: false}).length).toBe(21)
  var summary = page.getByRole("textbox", {name: /summary/i});
  await userEvent.type(summary, "asdfasdfasdfasdf")
  expect(summary).toHaveValue("asdfasdfasdfasdf")
  page.getByText('Review Body*:')
  page.getByText('Minimum required characters', {exact: false})
  //userEvent.click(page.getByText('Submit'))
})

/*
test("", async () => {
  const page = render(<Reviews .../>);

})
*/