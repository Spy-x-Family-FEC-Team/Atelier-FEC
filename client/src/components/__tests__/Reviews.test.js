import React from "react";
import ReactDOM from "react-dom";
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
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

test("should correctly render Reviews given dummy data", () => {
  const page = render(<Reviews reviewData={dummyReviewData} reviews={dummyReviews} product={dummyProduct}/>);

  screen.debug();

  staticSubtests(page)
})

test("should correctly render Reviews given blank data", () => {
  const page = render(<Reviews reviewData={blankReviewData} reviews={blankReviews} product={blankProduct}/>);

  screen.debug();

  staticSubtests(page)
})