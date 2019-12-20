import PropTypes from "prop-types";

const post = {
  author: PropTypes.string,
  created: PropTypes.number,
  hasBeenRead: PropTypes.bool,
  id: PropTypes.string,
  numberOfComments: PropTypes.number,
  thumbnail: PropTypes.string,
  title: PropTypes.string,
};

export default post;
