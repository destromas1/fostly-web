import { validateUrl } from "../app/utilities/utils";

it("validates a Url which is not valid", () => {
  const urlToCheck = "shahjada.me";
  expect(validateUrl(urlToCheck)).toEqual(false);
});

it("validates a Url which is valid", () => {
  const urlToCheck = "http://shahjada.me";
  expect(validateUrl(urlToCheck)).toEqual(true);
});
