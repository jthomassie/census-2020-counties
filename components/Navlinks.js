// coomponents/Navlinks.js

import Link from "next/link";

//
const Navlinks = ({ active }) => {
  console.log("active", active);
  return (
    <div className="px-3 py-2 gray rounded-3">
      <div className="mb-3">
        <h3 className="m-0">api</h3>
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
          <li>
            <Link href="/api/subtypes">
              <a>subtypes</a>
            </Link>
          </li>
        </ul>
      </div>

      <div className="mb-3">
        <h3 className="m-0">pages</h3>
        <ul className="list-unstyled">
          <li>
            <Link href="/">
              <a>home</a>
            </Link>
          </li>
          <li>
            <Link href="/top20">
              <a>top20</a>
            </Link>
          </li>
          <li>
            <Link href="/top1000">
              <a>top1000</a>
            </Link>
          </li>
          <li>
            <Link href="/swr-ex">
              <a>swr-ex</a>
            </Link>
          </li>
          <li>
            <Link href="/ra-data">
              <a>ra-data</a>
            </Link>
          </li>
          <li>
            <Link href="/swr">
              <a>swr</a>
            </Link>
          </li>
          <li>
            <Link href="/med-age">
              <a>med-age</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navlinks;
