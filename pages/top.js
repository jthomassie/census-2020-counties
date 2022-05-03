// pages/top.js
import { connectToDatabase } from "../lib/mongodb";

export default function Top({ counties }) {
  return (
    <div>
      <h1>Top Counties</h1>
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
