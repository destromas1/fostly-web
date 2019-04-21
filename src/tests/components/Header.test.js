import React from "react";
import { shallow } from "enzyme";
import Header from "../../app/components/header";

it("Header - renders with shallow", () => {
  shallow(<Header />);
});
