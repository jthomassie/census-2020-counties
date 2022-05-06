// pages/subtype-map.js

import useSWR, { SWRConfig } from "swr";
import Navlinks from "../components/Navlinks";
import Button from "../components/Button";
import * as ga from "../components/googleAnalytics";

//
const fetcher = (...args) => fetch(...args).then((res) => res.json());
const API = "/api/subtypes";

// server side fetch on build
export async function getServerSideProps() {
  // get the current environment
  let dev = process.env.NODE_ENV !== "production";
  let DEV_URL = process.env.DEV_URL;
  let PROD_URL = process.env.PROD_URL;
  let API_URL = `${dev ? DEV_URL : PROD_URL}${API}`;
  //
  const subtypes = await fetcher(API_URL);
  return {
    props: {
      fallback: {
        [API]: subtypes,
      },
      apiurl: API_URL,
    },
  };
}

// HOC data handler
const DataHandler = () => {
  //
  const { data, error } = useSWR(API);

  // there should be no `undefined` state
  console.log("Is data ready?", !!data);
  console.log("Error: ", error);
  console.log("Data: ", data);

  //
  if (error) return `Error: ${error}`;
  if (!data) return "Loading...";

  //
  const Toggles = ({ data }) => {
    return (
      <>
        {data.subtypes.map((d, i) => (
          <Button key={`i-${i}`} d={d} i={i} />
        ))}
      </>
    );
  };

  //
  return (
    <>
      <Toggles data={data} />
    </>
  );
};

//
const Page = ({ fallback, apiurl }) => {
  console.log("apiurl", apiurl);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-4 col-md-3 col-lg-2 mt-5">
            <Navlinks active={"subtype-map"} />
          </div>

          <div className="col-8 col-md-9 col-lg-10 mt-5">
            <h1>Subtype map</h1>
            <SWRConfig value={{ fallback }}>
              <DataHandler />
            </SWRConfig>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
