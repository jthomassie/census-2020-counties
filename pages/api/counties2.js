// pages/api/counties2.js

// import { connectToDatabase } from "../lib/mongodb";
import { getCounties } from "../lib/mongodb";

export default async function handler(req, res) {
  res.status(200).json(await getCounties());
}
