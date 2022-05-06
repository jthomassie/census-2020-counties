// pages/api/median-age.js
import { connectToCensusDb } from "../../lib/mongodb";

//
const handler = async (req, res) => {
  const { db } = await connectToCensusDb();

  let withAtts = {
    POP: "$AMPKE001",
    MED_AGE_T: "$AMPLE001",
    MED_AGE_M: "$AMPLE002",
    MED_AGE_F: "$AMPLE003",
    GISJOIN: 1,
    STUSAB: 1,
    STATE: 1,
    STATEA: 1,
    COUNTY: 1,
    COUNTYA: 1,
    NAME_M: 1,
    _id: 0,
  };

  //
  const counties = await db
    .collection("countiesclean")
    .aggregate([
      { $match: {} },
      { $project: withAtts },
      { $sort: { MED_AGE_T: 1 } },
    ])
    .toArray();

  //
  res.status(200).json({ counties });
};

export default handler;
