// components/Navs.js

import Link from "next/link";

const Navs = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-">
            <h3 className="m-0 mt-5">api</h3>
            <ul className="list-unstyled">
              <li>
                <Link href="/api/median-age">
                  <a>median-age</a>
                </Link>
              </li>
              <li>
                <Link href="/api/population">
                  <a>population</a>
                </Link>
              </li>
            </ul>

            <h3 className="m-0 mt-3">pages</h3>
            <ul className="list-unstyled">
              <li>
                <Link href="/med-age">
                  <a>med-age</a>
                </Link>
              </li>
              <li>
                <Link href="/counties">
                  <a>counties</a>
                </Link>
              </li>
              <li>
                <Link href="/data">
                  <a>data</a>
                </Link>
              </li>
              <li>
                <Link href="/swr-ex">
                  <a>swr-ex</a>
                </Link>
              </li>
              <li>
                <Link href="/swr">
                  <a>swr</a>
                </Link>
              </li>
              <li>
                <Link href="/top">
                  <a>top</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navs;
