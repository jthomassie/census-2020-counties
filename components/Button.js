// components/Button.js

//
const Button = ({ d, i }) => {
  return (
    <button
      // key={`i-${i}`}
      data-key={d}
      type="button"
      className="btn btn-primary layer-button me-1 mb-1"
    >
      <span className="dot"></span>
      {d._id}
    </button>
  );
};

export default Button;
