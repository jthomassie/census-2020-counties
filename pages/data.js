// pages/data.js

import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Profile = () => {
  const { data, error } = useSWR("/api/hello", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.bio}</p>
    </div>
  );
};

export default Profile;
