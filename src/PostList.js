import React from "react";
import T from "prop-types";
import PostListItem from "./PostListItem";

export const PostList = ({ posts }) => {
  return (
    <div>
      {posts.map(
        post =>
          post.id && (
            // <div className="postList">
            <PostListItem
              key={post.id}
              id={post.id}
              title={post.title}
              body={post.body}
            />
            // </div>
          )
      )}
    </div>
  );
};

PostList.propTypes = {
  posts: T.array.isRequired
};
