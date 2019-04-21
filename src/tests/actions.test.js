import * as actions from "../app/modules/links/actions";
import * as types from "../app/modules/links/action-types";

it("should create an action to add a todo", () => {
  const links = [
    { id: "11111", url: "http://shahjada.me", hash: "ytYuh" },
    { id: "22222", url: "https://google.com", hash: "mpDhu" },
    { id: "33333", url: "https://facebook.com", hash: "pmyTh" }
  ];

  const expectedAction = {
    type: types.SAVE_LINKS,
    payload: links
  };
  expect(actions.saveLinks(links)).toEqual(expectedAction);
});
