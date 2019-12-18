import React from "react";
import { Provider } from "react-redux";

import store from "../../../store";

import styles from "./app.less";

const App = () => (
  <Provider store={store}>
    <div className={styles.app}>
    </div>
  </Provider>
);

export default App;
