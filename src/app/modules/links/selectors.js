export const getLinks = state => {
  let links = [];
  if (state.links.list.length > 0) {
    links = state.links.list;
  }
  return links;
};
