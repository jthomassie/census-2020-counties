// lib/counties.js

export async function getCounties() {
  let data = await fetch("http://localhost:3000/api/counties").then((r) =>
    r.json()
  );
  console.log("getCounties", data);
  return {
    counties: data,
  };
}
