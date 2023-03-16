import React from "react";
import { render } from "react-dom";

// Do we want to migrate the app into a separate folder?
const App = () => (
  <div>Hello u stinky World</div>
  // <Overview/>
  // <Related/>
  // <QnA/>
  // <Reviews/>
)

render(
  <App/>,
  document.getElementById("root")
);