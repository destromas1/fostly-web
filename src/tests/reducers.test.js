import reducer from "../app/modules/links/reducers";
import * as types from "../app/modules/links/action-types";

describe("links reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      list: []
    });
  });

  const initialState = {
    list: []
  };

  const links = [
    { id: "11111", url: "http://shahjada.me", hash: "ytYuh" },
    { id: "22222", url: "https://google.com", hash: "mpDhu" },
    { id: "33333", url: "https://facebook.com", hash: "pmyTh" }
  ];

  it("should handle SAVE_LINKS", () => {
    expect(
      reducer(initialState, {
        type: types.SAVE_LINKS,
        payload: links
      })
    ).toEqual({
      list: links
    });
  });
});
