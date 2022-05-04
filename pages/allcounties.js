// pages/top.js

import { connectToDatabase } from "../lib/mongodb";
import Navlinks from "../components/Navlinks";

export default function Top({ counties }) {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-4 col-md-3 col-lg-2 mt-5">
            <Navlinks active={"counties"} />
          </div>

          <div className="col-8 col-md-9 col-lg-10 mt-5">
            <h1>All counties</h1>
            <p>Uses getStaticProps()</p>
            <ul className="list-unstyled">
              {counties.map((c, i) => (
                <li key={`i-${i}`}>
                  <h6 className="m-0">{`${i + 1}. ${c.COUNTY}`}</h6>
                  <p className="m-0 mb-2">{c.AMPKE001.toLocaleString()}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const { db } = await connectToDatabase();

  const counties = await db
    .collection("countiesclean")
    .find({ STATEA: { $ne: "State Code" } })
    .sort({ AMPKE001: -1 })
    // .limit(3000)
    .toArray();

  return {
    props: {
      counties: JSON.parse(JSON.stringify(counties)),
    },
  };
}
