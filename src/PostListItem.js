import React from "react";
import T from "prop-types";

export const PostListItem = ({ id, title, body }) => {
  return (
    <div className="postItem" id={id}>
      <div>{id}</div>
      <div>Title: {title}</div>
      <div>Body: {body}</div>
    </div>
  );
};

PostListItem.propTypes = {
  id: T.number.isRequired,
  title: T.string.isRequired,
  body: T.string.isRequired
};

export default PostListItem;
