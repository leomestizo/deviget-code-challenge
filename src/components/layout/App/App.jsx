import React from "react";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

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

const App = () => (
  <Provider store={store}>
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
  </Provider>
);

export default App;
