import uuid from "uuid/v1";
import { handleActions } from "redux-actions";

import {
  addElementIntoArray,
  removeElementFromArray,
} from "utils/array";

import * as actionCreators from "./actions";

const defaultState = {
  pictureList: [],
};

const handleSavePictureAction = (state, action) => ({
  ...state,
  pictureList: addElementIntoArray(state.pictureList, {
    id: uuid(),
    src: action.payload.picture,
  }),
});

const handleRemovePictureAction = (state, action) => ({
  ...state,
  pictureList: removeElementFromArray(state.pictureList, action.payload.id),
});

const reducer = handleActions(
  {
    [actionCreators.savePicture]: handleSavePictureAction,
    [actionCreators.removePicture]: handleRemovePictureAction,
  },
  defaultState,
);

export default reducer;
