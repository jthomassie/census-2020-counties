// pages/index.js

import Head from "next/head";
import Link from "next/link";
import Navlinks from "../components/Navlinks";

//
const Home = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <div className="container">
          <div className="row">
            <div className="col-4 col-md-3 col-lg-2 mt-5">
              <Navlinks active={"home"} />
            </div>

            <div className="col-8 col-md-9 col-lg-10 mt-5">
              <h1>Features editor</h1>
              <h5>Built with: next, mongodb, swr, bootstrap, mapbox-gl</h5>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
