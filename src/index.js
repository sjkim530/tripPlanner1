console.log("INSIDE index.js");

import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1Ijoic2praW01MzAiLCJhIjoiY2tmd3A2MnJqMGt6ODJxazA4bm9nenZqMiJ9._cHwLwC4iCMuC9u4C1wZzQ";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10", // mapbox has lots of different map styles available.
});
