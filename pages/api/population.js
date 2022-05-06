// pages/api/population.js

import { connectToCensusDb } from "../../lib/mongodb";

// query
let query = { AMPKE001: { $gt: 500000 } };

//
const handler = async (req, res) => {
  const { db } = await connectToCensusDb();

  let withAtts = {
    POP: "$AMPKE001",
    GISJOIN: 1,
    STUSAB: 1,
    STATE: 1,
    STATEA: 1,
    COUNTY: 1,
    COUNTYA: 1,
    NAME_M: 1,
    _id: 0,
  };

  // filter aggregation
  const counties = await db
    .collection("countiesclean")
    .aggregate([
      { $match: query },
      { $project: withAtts },
      { $sort: { POP: -1 } },
    ])
    .toArray();
  //
  res.status(200).json({ counties });
};

export default handler;
