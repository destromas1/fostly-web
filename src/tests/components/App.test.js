import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import App from "../../app/App";

it("renders without crashing with shallow", () => {
  shallow(<App />);
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});
