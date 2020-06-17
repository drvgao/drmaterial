import { combineReducers } from "redux";

import { dogReducer } from "../apps/dogs/container/reducers";

export const rootReducer = combineReducers({
  dogs: dogReducer,
});

// export default rootReducer;
