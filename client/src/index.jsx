import React from "react";
import { render } from "react-dom";
import Reviews from "./components/Reviews";

// Do we want to migrate the app into a separate folder?
const App = () => (
  <>
  <div>Hello u stinky World</div>
    <Reviews/>
    {/* <Overview/>
    <Related/>
    <QnA/> */}
  </>
)

render(
  <App/>,
  document.getElementById("root")
);