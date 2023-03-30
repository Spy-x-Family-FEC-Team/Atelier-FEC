import React from "react";
import ReactDOM from "react-dom";
import { render, screen, cleanup, fireEvent, waitFor } from '@testing-library/react';
import Related from '../Related/index.jsx';
import product from '/server/exampleData/product.json'
import CompareWindow from '../Related/CompareWindow';
import Carousel from '/client/src/components/Related/Carousel';
import outfit from "/client/src/components/assets/outfit.jsx";
import RmvFromOutfit from "/client/src/components/Related/ActionBtn/RmvFromOutfit.jsx";

afterEach(() => {
  cleanup();
})

test("should correctly render the Related component", async () => {
  const { getByText, getByLabelText, getByRole } = render(<Related item={product}product={product}/>);

  getByText('RELATED PRODUCTS');
  getByText('YOUR OUTFIT');
  getByText('Add to Outfit');

  const actionBtns = await screen.findAllByTestId("compare");
  screen.debug();
  console.log('actionbtns', actionBtns);
  // expect(actionBtns).length.toBe(3)

});

test("should show modal window when compare items button is clicked", () => {
  const { getByText, getByLabelText, getByRole, getByTestId } = render(<CompareWindow item={outfit} product={product}/>);

  const compareBtn = getByTestId("compare");
  fireEvent.click(compareBtn);
  getByText("Comparing");
});

test("should display add button if mode is outfits", () => {
  const { getByText, getByLabelText, getByRole, getByTestId } = render(<Carousel mode="outfit" list={outfit}/>);

  screen.debug();

  const btn = getByText("Add to Outfit");
});

test("function remove from outfit should be called once on click", () => {
  const { getByText, getByLabelText, getByRole, getByTestId } = render(<RmvFromOutfit/>);

  screen.debug();

  const button = getByTestId("button");
  fireEvent.click(button);
  expect(RmvFromOutfit)
})