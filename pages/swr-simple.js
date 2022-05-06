// pages/swr-simple.js

import useSWR from "swr";
import Navlinks from "../components/Navlinks";

//
const fetcher = (url) => fetch(url).then((res) => res.json());

const App = () => {
  // remote api
  const { data, error } = useSWR(
    "https://api.github.com/repos/vercel/swr",
    fetcher
  );

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";
  if (!!data) console.log(data);

  //
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-4 col-md-3 col-lg-2 mt-5">
            <Navlinks active={"swr-simple"} />
          </div>

          <div className="col-8 col-md-9 col-lg-10 mt-5">
            <h1 className="mb-5">swr-simple</h1>
            <p>
              Repo: <strong>{data.name}</strong>
              <br />
              Description: <strong>{data.description}</strong>
              <br />
              Subscribers:{" "}
              <strong>{data.subscribers_count.toLocaleString()}</strong>
              <br />
              Stars: <strong>{data.stargazers_count.toLocaleString()}</strong>
              <br />
              Forks: <strong>{data.forks_count.toLocaleString()}</strong>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
