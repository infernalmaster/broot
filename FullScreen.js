import React from "react";

export default () => (
  <button
    style={{
      position: "absolute",
      right: 10,
      top: 10
    }}
    onClick={() => document.body.requestFullscreen()}
  >
    ⛶
  </button>
);
