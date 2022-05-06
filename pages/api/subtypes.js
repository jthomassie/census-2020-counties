// pages/api/subtypes.js

import { connectToRaMapDb } from "../../lib/ramapdb";
import { sevenCounty } from "../../geojson/sevenCounty";

// is point within 7-couunty boundary
let geoquery = {
  "geometry.coordinates": {
    $geoWithin: {
      $geometry: sevenCounty,
    },
  },
};

// group, count by subtype
let subtype = {
  _id: "$properties.SUBTYPE",
  count: { $count: {} },
};

//
const handler = async (req, res) => {
  if (req.method === "GET") {
    const { db } = await connectToRaMapDb();
    const collection = await db.collection("odnr_waterway_points");
    //
    const subtypes = await collection
      .aggregate([
        { $match: geoquery },
        { $group: subtype },
        { $sort: { count: -1, _id: 1 } },
      ])
      .toArray();
    res.status(200).json({ subtypes });
  } else {
    res.status(404).json({ status: "Error route not found" });
  }
};

export default handler;
