import React from "react";
import ReactDOM from "react-dom";
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Overview from '../Overview/index.jsx';
import product from '/server/exampleData/product.json'
import reviewData from '/server/exampleData/reviewData.json';

afterEach(() => {
  cleanup();
})

test("should correctly render the Overview component", async () => {
  const { getByText, getByLabelText } = render(<Overview product={product} reviewData={reviewData} />);

  // screen.debug();
  await userEvent.click(getByText('Read all', {exact: false}))
  getByText('Description');
})