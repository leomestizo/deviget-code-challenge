import { createActions } from "redux-actions";

export const {
  removePicture,
  savePicture,
} = createActions(
  {
    REMOVE_PICTURE: (id) => ({ id }),
    SAVE_PICTURE: (picture) => ({ picture }),
  },
  {
    prefix: "PICTURE_GALLERY",
  },
);
