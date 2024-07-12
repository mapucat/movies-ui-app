import React from "react";

const SvgComponent = (props: any) => {
  return React.createElement("svg", {
    ...props,
    "data-testid": "svg-mock",
  });
};
module.exports = SvgComponent;
module.exports.ReactComponent = SvgComponent;
