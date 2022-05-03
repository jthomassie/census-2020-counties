// lib/counties.js

export async function getCounties() {
  let data = await fetch(
    "https://api.data.gov.sg/v1/transport/taxi-availability"
  ).then((r) => r.json());
  console.log("getCounties", data.features[0].properties);
  return {
    counties: data,
  };
}
