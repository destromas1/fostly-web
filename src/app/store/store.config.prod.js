import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";

const initiateStore = preloadedState => {

  const enhancerArray = [];
  enhancerArray.push();
  const appliedMiddleware = applyMiddleware(thunk);

  const enhancers = compose(appliedMiddleware, ...enhancerArray);

  return createStore(rootReducer, enhancers);
};

export const store = initiateStore();
