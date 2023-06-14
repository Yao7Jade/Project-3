

function optionChanged(fall){
var url = "get_year_count?fell="+fall;
d3.json(url).then(function(datas) {


var  x=  datas.map(object => object.year);
var  y=  datas.map(object => object.count);


  Plotly.restyle("line", "x", [x]);
  Plotly.restyle("line", "y", [y]);

}
);

}


let url = "get_year_count?fell=All";
d3.json(url).then(function(datas) {

    console.log(datas);


let trace1 = {
  x: datas.map(object => object.year),
  y: datas.map(object => object.count),
  mode: 'lines+markers'
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
Plotly.newPlot("line", traceData, layout);




}
);