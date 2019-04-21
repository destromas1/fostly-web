import React from "react";
import { shallow } from "enzyme";
import Link from "../../app/modules/links/components/Link";

const link = { id: "11111", url: "http://shahjada.me", hash: "ytYuh" };

it("Link - renders with shallow", () => {
  shallow(<Link data={link} />);
});

it("Link - should call deleteLink function when delete clicked", function() {
  const onDeleteLink = jest.fn();
  const component = shallow(
    <Link key={"testkey"} data={link} deleteLink={onDeleteLink} />
  );
  component.find('button').at(0).simulate('click');
  expect(onDeleteLink.mock.calls.length).toEqual(1);
});
