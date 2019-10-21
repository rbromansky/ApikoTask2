import React, { useState, Fragment } from "react";
import T from "prop-types";

import "./styles.css";

export const Search = ({ onSearch }) => {
  const [value, setInputValue] = useState("");
  const onChange = event => setInputValue(event.target.value);

  const onClick = event => {
    event.preventDefault();
    onSearch(value);
    setInputValue("");
  };

  return (
    <Fragment>
      <input
        className="button-input"
        placeholder="Searh input"
        {...{ value }}
        onChange={onChange}
      />
      <button className="button-input" onClick={onClick}>
        Search
      </button>
    </Fragment>
  );
};

Search.protoTypes = {
  onSearch: T.func.isRequired
};
