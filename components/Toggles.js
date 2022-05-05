// coomponents/Toggles.js

import Link from "next/link";

//
const Button = ({ d, i }) => {
  return (
    <button key={`i-${i}`} data-key={d} className="layer-button">
      <span className="dot"></span>
      {d}
    </button>
  );
};

//
const Toggles = ({ data }) => {
  console.log("data", data);
  return (
    <div className="px-3 py-2 gray rounded-3">
      <div className="mb-3">
        <h3 className="m-0">toggles</h3>
        {data.map((d, i) => (
          <Button d={d} i={i} />
        ))}
      </div>
    </div>
  );
};

export default Toggles;
