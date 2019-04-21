import React from "react";
import { shallow, mount } from "enzyme";
import LinkPage from "../../app/modules/links/components/LinkPage";

it("LinkPage - renders with shallow", () => {
  shallow(<LinkPage />);
});

it('LinkPage - checks for the page header', () => {
  const wrapper = shallow(<LinkPage />);
  const appName = <h1>Manage your links</h1>;
  expect(wrapper).toContainReact(appName);
});
