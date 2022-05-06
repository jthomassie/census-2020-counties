// components/Navlinks.js

import Link from "next/link";

//
const Navlinks = ({ active }) => {
  //
  let pageLinks = [
    { href: "/", lbl: "home" },
    { href: "/topcounties", lbl: "topcounties" },
    { href: "/allcounties", lbl: "allcounties" },
    { href: "/map", lbl: "map" },
    { href: "/subtype-map", lbl: "subtype-map" },
    { href: "/swr-simple", lbl: "swr-simple" },
    { href: "/swr-fallback", lbl: "swr-fallback" },
    { href: "/ra-data", lbl: "ra-data" },
  ];
  let apiLinks = [
    { href: "/api/median-age", lbl: "median-age" },
    { href: "/api/population", lbl: "population" },
    { href: "/api/subtypes", lbl: "subtypes" },
    { href: "/api/ra-features", lbl: "ra-features" },
    { href: "/api/inregion", lbl: "inregion" },
  ];
  //
  return (
    <>
      <div className="pt-2 sticky-top">
        <div className="px-3 py-2 dk-gray rounded-3">
          <div className="mb-3">
            <h3 className="m-0 mb-1">pages</h3>
            <ul className="list-unstyled">
              {pageLinks.map((link, i) => (
                <li key={`i1-${i}`}>
                  <Link href={link.href}>
                    <a className={link.lbl === active ? "active" : ""}>
                      {link.lbl}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-3">
            <h3 className="m-0 mb-1">api</h3>
            <ul className="list-unstyled">
              {apiLinks.map((link, i) => (
                <li key={`i2-${i}`}>
                  <Link href={link.href}>
                    <a className={link.lbl === active ? "active" : ""}>
                      {link.lbl}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navlinks;
