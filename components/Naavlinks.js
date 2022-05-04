// coomponents/Navlinks.js

import Link from "next/link";

//
const Navlinks = () => {
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
        </ul>
      </div>

      <div className="mb-3">
        <h3 className="m-0">pages</h3>
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
  );
};

export default Navlinks;
