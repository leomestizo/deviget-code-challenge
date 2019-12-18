import { combineReducers } from "redux";

import postModuleReducer from "components/module/post/reducer";

const rootReducer = combineReducers({
  post: postModuleReducer,
});

export default rootReducer;
