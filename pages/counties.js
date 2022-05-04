// pages/counties.js
import { connectToDatabase } from "../lib/mongodb";

//
const Counties = ({ counties }) => {
  console.log(counties);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col mt-5">
            <h1>Top 20 counties</h1>
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
};
export default Counties;

//
export async function getServerSideProps() {
  const { db } = await connectToDatabase();
  const counties = await db
    .collection("countiesclean")
    .find({})
    // .sort({ metacritic: -1 })
    .limit(20)
    .toArray();
  //
  return {
    props: {
      counties: JSON.parse(JSON.stringify(counties)),
    },
  };
}
