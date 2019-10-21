import React, { useState, useEffect } from "react";

import { PostList } from "./PostList";
import { MoreButton } from "./MoreButton";
import { Loader } from "./Loader";
import { Search } from "./Search";

export const App = () => {
  const [data, setData] = useState([], ({ data }) => {
    setPosts(data.slice(0, 10));
  });

  const [posts, setPosts] = useState([]);
  const [limit, setLimit] = useState(10);
  const [loaderShow, setLoaderShow] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await fetch("https://jsonplaceholder.typicode.com/posts").then(response =>
        response
          .json()
          .then(data => ({ data: data }))
          .then(res => {
            setData(res.data);
          })
      );

      setLoaderShow(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    setPosts(data.slice(0, 10));
  }, [data]);

  const onAddMore = () => {
    let lim = limit + 10;
    if (lim <= 100) setLimit(lim);
    setPosts(data.slice(0, limit + 10));
  };

  const onSearch = searchText => {
    searchText === ""
      ? setPosts(data.slice(0, limit))
      : setPosts(
          data
            .slice(0, limit)
            .map(
              post =>
                (post.title.indexOf(searchText) + 1 ||
                  post.body.indexOf(searchText) + 1) &&
                post
            )
        );
  };

  return (
    <div>
      <MoreButton onAddMore={onAddMore} />
      <Search onSearch={onSearch} />
      {loaderShow ? <Loader /> : null}
      <PostList posts={posts} />
      <MoreButton onAddMore={onAddMore} />
    </div>
  );
};
