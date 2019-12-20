import axios from "axios";

import { BASE_URL } from "constants/redditApi";

export const getPosts = ({
  subreddit = "all",
  sortCriteria = "top",
  limit = 50,
} = {}) => axios.get(`${BASE_URL}/r/${subreddit}/${sortCriteria}.json?limit=${limit}`, {
  transformResponse: (response) => {
    const parsedJson = JSON.parse(response);

    return parsedJson.data.children.map((postData) => ({
      ...postData.data,
      hasBeenRead: false,
    }));
  },
});
