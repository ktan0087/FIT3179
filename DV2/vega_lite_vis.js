var vg_1 = "air_pollution_map.vg.json";
vegaEmbed("#map_chart", vg_1)
  .then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  })
  .catch(console.error);

var vg_2 = "air_pollution_lollipop.vg.json";
vegaEmbed("#lollipop_chart", vg_2)
  .then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  })
  .catch(console.error);

var vg_3 = "air_pollution_scatter.vg.json";
vegaEmbed("#scatter_chart", vg_3)
  .then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  })
  .catch(console.error);

var vg_4 = "air_pollution_bar.vg.json";
vegaEmbed("#bar_chart", vg_4)
  .then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  })
  .catch(console.error);

var vg_5 = "air_pollution_bump.vg.json";
vegaEmbed("#bump_chart", vg_5)
  .then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  })
  .catch(console.error);
