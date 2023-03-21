import React from "react";
import ReactDOM from "react-dom";
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import Overview from '../Overview/index.jsx';

afterEach(() => {
  cleanup();
})

test("should correctly render the Overview component", () => {
  const { getByText, getByLabelText } = render(<Overview/>);

  screen.debug();

  getByText('Description');
})