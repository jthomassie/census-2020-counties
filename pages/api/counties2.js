// pages/api/counties2.js

// import { connectToDatabase } from "../lib/mongodb";
import { getCounties } from "../../lib/counties";

export default async function handler(req, res) {
  res.status(200).json(await getCounties());
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
