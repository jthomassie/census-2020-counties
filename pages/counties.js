// pages/counties.js
import { connectToDatabase } from "../lib/mongodb";

export default function Movies({ counties }) {
  console.log(counties);
  return (
    <div>
      <h1>Top 20 counties</h1>
      <ul>
        {counties.map((c, i) => (
          <li>
            <h6>{c.COUNTY}</h6>
            <p>{c.POP}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const { db } = await connectToDatabase();

  const counties = await db
    .collection("counties")
    .find({})
    // .sort({ metacritic: -1 })
    .limit(20)
    .toArray();

  return {
    props: {
      counties: JSON.parse(JSON.stringify(counties)),
    },
  };
}