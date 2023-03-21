import React from "react";
import ReactDOM from "react-dom";
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import Related from '../Related/index.jsx';

afterEach(() => {
  cleanup();
})

test("should correctly render the Related component", () => {
  const { getByText, getByLabelText } = render(<Related/>);

  screen.debug();

  getByText('Left');
})