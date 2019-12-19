import { combineReducers } from "redux";

import pictureGalleryModuleReducer from "components/module/picture-gallery/reducer";
import postModuleReducer from "components/module/post/reducer";

const rootReducer = combineReducers({
  pictureGallery: pictureGalleryModuleReducer,
  post: postModuleReducer,
});

export default rootReducer;
