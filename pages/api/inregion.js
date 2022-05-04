// pages/api/landsname.js

import { connectToRamapdb } from "../../lib/ramapdb";
import { sevenCounty } from "../../geojson/sevenCounty";

// is point within 7-couunty boundary
let geoquery = {
  "geometry.coordinates": {
    $geoWithin: {
      $geometry: sevenCounty,
    },
  },
};

//
module.exports = async (req, res) => {
  if (req.method === "GET") {
    const { db } = await connectToRamapdb();
    const collection = await db.collection("odnr_waterway_points");
    const inregion = await collection
      .aggregate([
        { $match: geoquery },
        { $sort: { count: -1, "properties.LANDS_NAME": 1 } },
      ])
      .toArray();
    res.status(200).json({ inregion });
  } else {
    res.status(404).json({ status: "Error route not found" });
  }
};
