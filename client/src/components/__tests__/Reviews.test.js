import React from "react";
import ReactDOM from "react-dom";
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import Reviews from '/client/src/components/Reviews/index.jsx';
import reviews from '/server/exampleData/reviews.json';
import reviewData from '/server/exampleData/reviewData.json';

afterEach(() => {
  cleanup();
})

test("should correctly render Reviews given dummy data", () => {
  const { getByText, getByLabelText } = render(<Reviews reviewData={reviewData} reviews={reviews}/>);

  screen.debug();

  getByText('Hello from the Write a Review modal window!');
})