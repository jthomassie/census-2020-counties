// pages/top.js
import { connectToDatabase } from "../lib/mongodb";

export default function Top({ counties }) {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col mt-5">
            <h1>Top 100 counties</h1>
            <ul className="list-unstyled">
              {counties.map((c, i) => (
                <li key={`i-${i}`}>
                  <h6 className="m-0">{c.COUNTY}</h6>
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
    .collection("counties")
    .find({})
    .limit(100)
    .toArray();

  return {
    props: {
      counties: JSON.parse(JSON.stringify(counties)),
    },
  };
}
