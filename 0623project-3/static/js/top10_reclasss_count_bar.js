


let url = "get_top10_recclass_count";
d3.json(url).then(function(datas) {

    console.log(datas);


let trace1 = {
  x: datas.map(object => object.count),
  y: datas.map(object => object.recclass),
  text: datas.map(object => object.recclass),
  name: " top10  recclass count",
  type: "bar",
  orientation: "h"
};

// Data array
// `data` has already been defined, so we must choose a new name here:
let traceData = [trace1];

// Apply a title to the layout
let layout = {
  margin: {
    l: 100,
    r: 100,
    t: 100,
    b: 100
  }
};

// Render the plot to the div tag with id "plot"
// Note that we use `traceData` here, not `data`
Plotly.newPlot("bar", traceData, layout);


console.log(1212121);

}
);