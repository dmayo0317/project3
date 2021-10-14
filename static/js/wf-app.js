// // Linking the json file
const url = "static/js/wf-pizza.json";

function generatePlots(pizzaBrand) {
  d3.json(url).then(function (data) {
    var selectedPizzaBrand = data.metadata.filter(row => row.brand == pizzaBrand)[0]
    var selectedPizzaPrice = data.metadata.filter(row => row.brand == ppizzaBrand)[1]

    // console.log('otus', selectedPatientSamples.otu_ids.slice(0, 10))
    console.log('pizza', data);








    //This can possibly be used for additional information like nutritional stuff
    // var demoInfo = d3.select('.panel-body')
    // demoInfo.html("")
    // Object.entries(selectedPatientMD).forEach(([key, value]) => {
    //   demoInfo.append('h5').text(`${key} : ${value}`)
    // });

  })
}

//This code runs on startup
// d3.json(url).then(function (data) {

//   var dropdown = d3.select('#selDataset')
//   data.names.forEach(patientId => {
//     dropdown.append('option').property('value', patientId).text(patientId)
//   });

//   generatePlots(data.names[0])

// });



// Our labels along the x-axis
var data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [{
    label: "Dataset #1",
    backgroundColor: "rgba(255,99,132,0.2)",
    borderColor: "rgba(255,99,132,1)",
    borderWidth: 2,
    hoverBackgroundColor: "rgba(255,99,132,0.4)",
    hoverBorderColor: "rgba(255,99,132,1)",
    data: [65, 59, 20, 81, 56, 55, 40],
  }]
};

var option = {
  scales: {
    yAxes: [{
      stacked: true,
      gridLines: {
        display: true,
        color: "rgba(255,99,132,0.2)"
      }
    }],
    xAxes: [{
      gridLines: {
        display: false
      }
    }]
  }
};

Chart.Bar('myAreaChart', {
  options: option,
  data: data
});














