// pages/swr.js
// https://github.com/sampoder/nextjs-isr-swr-example/blob/main/pages/index.js

import useSWR from "swr";

const App = (props) => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data } = useSWR("/api/population", fetcher, {
    fallbackData: props,
    refreshInterval: 30000,
  });
  console.log("App", data);
  //
  return (
    <>
      <h3>
        Test
        {/* As of {new Date(data.updatedAt).toLocaleString()}, there are{" "}
        {data.taxis.toLocaleString()} taxis available in Singapore! */}
      </h3>
    </>
  );
};
export default App;

// fetch on build executed server side
export async function getStaticProps() {
  const { connectToDatabase } = require("../lib/mongodb");
  return { props: await connectToDatabase(), revalidate: 1 };
}
