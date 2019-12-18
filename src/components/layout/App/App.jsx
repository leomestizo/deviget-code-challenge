import React from "react";
import { Provider } from "react-redux";

import Header from "components/layout/Header";
import PostPage from "components/module/post/PostPage";

import store from "../../../store";

import styles from "./app.less";

const App = () => (
  <Provider store={store}>
    <div className={styles.app}>
      <Header className={styles.header} />
      <PostPage className={styles["post-page"]} />
    </div>
  </Provider>
);

export default App;
