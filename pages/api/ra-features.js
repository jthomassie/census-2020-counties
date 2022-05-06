// pages/api/ra-features.js

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

let query = { "prperties.SUBTYPE": "Drinking Fountain" };

//
const handler = async (req, res) => {
  if (req.method === "GET") {
    const { db } = await connectToRaMapDb();
    const collection = await db.collection("odnr_waterway_points");
    //
    const fountains = await collection
      .aggregate([{ $match: geoquery }])
      .toArray();
    res.status(200).json({ fountains });
  } else {
    res.status(404).json({ status: "Error route not found" });
  }
};

export default handler;
