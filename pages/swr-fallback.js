// pages/swr-fallback.js

import useSWR, { SWRConfig } from "swr";
import Navlinks from "../components/Navlinks";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const API = "/api/population";

// fetches 'fallback' data from api on server-side build
export async function getServerSideProps() {
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

// HOC updates api data in front-end
const Display = () => {
  //
  const { data, error } = useSWR(API);

  // there should be no undefined state
  console.log("Is data ready?", !!data);
  console.log("Error: ", error);
  console.log("Data: ", data);

  //
  if (error) return `Error: ${error}`;
  if (!data) return "Loading...";

  // render api data
  const Features = ({ data }) => {
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
      <ul className="list-unstyled">
        <Features data={data} />
      </ul>
    </>
  );
};

// exported page
const Page = ({ fallback, myurl }) => {
  console.log("myurl", myurl);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          {/* nav */}
          <div className="col-4 col-md-3 col-lg-2 mt-5">
            <Navlinks active={"swr-fallback"} />
          </div>

          {/* main */}
          <div className="col-8 col-md-9 col-lg-10 mt-5">
            <h1>swr-fallback</h1>
            <p>{myurl}</p>
            <SWRConfig value={{ fallback }}>
              <Display />
            </SWRConfig>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
