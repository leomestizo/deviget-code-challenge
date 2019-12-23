import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Loader from "components/common/Loader";
import Header from "components/layout/Header";
import PictureGallery from "components/module/picture-gallery/PictureGallery";
import PostPage from "components/module/post/PostPage";

import {
  PICTURE_GALLERY_ROUTE,
  ROOT_ROUTE,
  TOP_POSTS_ROUTE,
} from "constants/routes";

import store from "../../../store";

import styles from "./app.less";

const persistor = persistStore(store);

const App = () => (
  <Provider store={store}>
    <PersistGate loading={<Loader />} persistor={persistor}>
      <div className={styles.app}>
        <Router>
          <Header className={styles.header} />
          <Switch>
            <Route exact path={[ROOT_ROUTE, TOP_POSTS_ROUTE]}>
              <PostPage className={styles["post-page"]} />
            </Route>
            <Route path={PICTURE_GALLERY_ROUTE}>
              <PictureGallery className={styles["picture-gallery"]} />
            </Route>
          </Switch>
        </Router>
      </div>
    </PersistGate>
  </Provider>
);

export default App;
