import { SAVE_LINKS } from "./action-types";

const initialState = {
  list: []
};

function loadLinks(state, data) {
  return {
    ...state,
    list: [...data]
  };
}

function links(state = initialState, action) {
  switch (action.type) {
    case SAVE_LINKS:
      return loadLinks(state, action.payload);
    default: {
      return state;
    }
  }
}

export default links;
