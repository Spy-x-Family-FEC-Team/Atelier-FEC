import React from "react";
import ReactDOM from "react-dom";
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import Overview from '../Overview/index.jsx';
import product from '/server/exampleData/product.json'
import reviewData from '/server/exampleData/reviewData.json';

afterEach(() => {
  cleanup();
})

test("should correctly render the Overview component", () => {
  const { getByText, getByLabelText } = render(<Overview product={product} reviewData={reviewData} />);

  screen.debug();

  getByText('Description');
})