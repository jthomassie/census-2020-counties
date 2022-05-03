// pages/api/counties2.js

import { getCounties } from "../../lib/counties";

export default async function handler(req, res) {
  res.status(200).json(await getCounties());
}
