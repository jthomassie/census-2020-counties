// pages/map.js

import useSWR, { SWRConfig } from "swr";
// import { connectToRamapdb } from "../lib/ramapdb";
import Map from "../components/Map";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const API = "/api/population";

const MapApp = () => {
  // swr
  const address = "/api/ra-features";
  const { data, error } = useSWR(address, fetcher, {
    revalidateOnFocus: true,
  });

  //
  if (error) <h1>Loading failed...</h1>;
  if (!data) <h1>Loading...</h1>;

  //
  let mapdata = {
    type: "FeatureCollection",
    features: [],
  };
  if (!!data) {
    mapdata = {
      type: "FeatureCollection",
      features: data.fountains,
    };
    //console.log("map data", mapdata);
  }
  //
  return (
    <>
      <div className="container mt-6">
        <div className="row">
          <div className="col">
            <Map mapdata={mapdata} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MapApp;
