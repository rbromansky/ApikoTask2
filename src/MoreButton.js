import React from "react";
import T from "prop-types";

export const MoreButton = ({ onAddMore }) => {
  const onClick = event => {
    onAddMore();
  };

  return (
    <button className="button-input" onClick={onClick}>
      More
    </button>
  );
};

MoreButton.protoTypes = {
  onAddMore: T.func.isRequired
};
