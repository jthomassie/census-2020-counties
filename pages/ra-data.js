// pages/ra-data.js

import useSWR, { SWRConfig } from "swr";
import Navlinks from "../components/Navlinks";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const API = "/api/population";

// server side fetch on build
export async function getServerSideProps() {
  //
  // get the current environment
  let dev = process.env.NODE_ENV !== "production";
  let DEV_URL = process.env.DEV_URL;
  let PROD_URL = process.env.PROD_URL;
  let API_URL = `${dev ? DEV_URL : PROD_URL}${API}`;
  //
  const counties = await fetcher(API_URL);
  return {
    props: {
      fallback: {
        [API]: counties,
      },
      myurl: API_URL,
    },
  };
}

const Repo = () => {
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
  const County = ({ data }) => {
    return data.counties.map((d, i) => (
      <li className="m-0 p-0 lh-sm mb-3" key={`i-${i}`}>
        <h6 className="m-0 p-0 lh-sm ">{`${i + 1}. ${d.COUNTY}, ${
          d.STUSAB
        }`}</h6>
        <p className="m-0 p-0 lh-sm ">{`Pop: ${d.POP.toLocaleString()}`}</p>
      </li>
    ));
  };

  //
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-4 col-md-3 col-lg-2 mt-5">
            <Navlinks active={"data"} />
          </div>

          <div className="col-8 col-md-9 col-lg-10 mt-5">
            <h1>ra-data</h1>
            <ul className="list-unstyled">
              <County data={data} />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default function App({ fallback, myurl }) {
  console.log("myurl", myurl);
  return (
    <SWRConfig value={{ fallback }}>
      <Repo />
    </SWRConfig>
  );
}
