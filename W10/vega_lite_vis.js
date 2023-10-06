var vg_1 = "air_pollution_map.vg.json";
vegaEmbed("#map_chart", vg_1)
  .then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  })
  .catch(console.error);

var vg_2 = "air_pollution_bubble.vg.json";
vegaEmbed("#bubble_chart", vg_2)
  .then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  })
  .catch(console.error);
