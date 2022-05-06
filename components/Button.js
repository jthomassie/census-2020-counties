// components/Button.js

import * as ga from "../components/googleAnalytics";

//
const Button = ({ d, i }) => {
  //
  const clickHandler = (e) => {
    console.log("click", d._id);
    // google analytics
    ga.event({
      action: "select_content",
      params: {
        town: d._id,
      },
    });
  };

  //
  return (
    <button
      data-key={d}
      type="button"
      className="btn btn-primary layer-button me-1 mb-1"
      onClick={clickHandler}
    >
      <span className="dot"></span>
      {d._id}
    </button>
  );
};

export default Button;
