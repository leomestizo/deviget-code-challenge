import React, { useState, useEffect } from "react";
import classnames from "classnames";
import { useDispatch, useSelector } from "react-redux";

import Loader from "components/common/Loader";

import { isNil } from "utils/type";

import PostList from "../PostList";

import { getIsLoading, getPosts } from "../selectors";

import {
  fetchPosts,
} from "../actions";

import styles from "./postPage.less";

const handlePostClick = (post) => {
  console.log("Yay!", post);
};

const PostPage = ({ className }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const posts = useSelector(getPosts);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => dispatch(fetchPosts()), []);

  const postPageClasses = classnames(styles["post-page"], className);

  return (
    <div className={postPageClasses}>
      <aside className={styles["post-list-container"]}>
        {isLoading
          ? (
            <div className={styles["loader-container"]}>
              <Loader />
            </div>
          )
          : (
            <PostList
              className={styles["post-list"]}
              onPostClick={(post) => handlePostClick(post)}
              posts={posts}
            />
          )
        }
      </aside>
      <section>
        {!isNil(selectedPost) && <span>Selected post</span>}
      </section>
    </div>
  );
};

export default PostPage;
