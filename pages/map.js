// pages/map.js

import useSWR, { SWRConfig } from "swr";
import Map from "../components/Map";
import Navlinks from "../components/Navlinks";

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
      <div className="container">
        <div className="row">
          <div className="col-4 col-md-3 col-lg-2 mt-5">
            <Navlinks active={"map"} />
          </div>

          <div className="col-8 col-md-9 col-lg-10 mt-5">
            <h1>Map</h1>
            <Map mapdata={mapdata} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MapApp;
