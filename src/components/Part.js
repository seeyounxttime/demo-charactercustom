import React from "react";

export const Part = ({ path, index, zIndex }) => {
  // console.log("rerender");
  return (
    <img
      src={`../${path}/${index}.png`}
      alt=""
      width={260}
      style={{ zIndex, position: "absolute", left: 0, top: 0 }}
    />
  );
};
