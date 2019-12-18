import { handleActions } from "redux-actions";

import * as actionCreators from "./actions";

const defaultState = {
  postList: [],
};

const reducer = handleActions(
  {
    [actionCreators.fetchPosts]: (state) => state,
    [actionCreators.removePost]: (state) => state,
    [actionCreators.removeAllPosts]: (state) => state,
    [actionCreators.markPostAsRead]: (state) => state,
  },
  defaultState,
);

export default reducer;
