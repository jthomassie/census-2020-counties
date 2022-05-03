// pages/data.js

import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Profile = () => {
  const { data, error } = useSWR("/api/median-age", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  console.log("data", data);

  //
  return (
    <>
      <h3>Top Counties</h3>
      <p>median-age</p>
      <ul>
        {counties.map((d, i) => (
          <li>
            <h6>{d.COUNTY}</h6>
            <p>{d.POP}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Profile;
