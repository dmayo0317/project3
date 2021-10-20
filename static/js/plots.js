
// Beginning of Random Bar Chart
var dd = d3.select("#dd")
d3.json("/api/v1.0/all_types").then(data => {
    console.log(data)

    data.forEach(element => {
        dd.append("option").text(element.Type).property("value", element.Type)
    });
    getType();
})

function getType() {
    var query = dd.property("value")
    d3.json(`/api/v1.0/type_query/${query}`).then(data => {
        console.log(data)

        var chart_data = {
            labels: data.map(obj => obj.Name),
            datasets: [{
                label: "Walmart",
                backgroundColor: "rgba(0,114,206,0.2)",
                borderColor: "rgba(0,114,206,1)",
                borderWidth: 2,
                hoverBackgroundColor: "rgba(0,114,206,0.4)",
                hoverBorderColor: "rgba(0,114,206,1)",
                data: data.slice(0, 5).map(obj => parseFloat(obj.Price)),
            },
            {
                label: "Whole Foods",
                backgroundColor: "rgba(0,103,75,0.2)",
                borderColor: "rgba(0,103,75,1)",
                borderWidth: 2,
                hoverBackgroundColor: "rgba(0,103,75,0.4)",
                hoverBorderColor: "rgba(0,103,75,1)",
                data: [0, 0, 0, 0, 0].concat(data.slice(5, 10).map(obj => parseFloat(obj.Price)))
            }
            ]
        };

        var option = {
            scales: {
                yAxes: [{
                    stacked: false,
                    gridLines: {
                        display: true,
                        color: "rgba(169,169,169,0.2)"
                    }
                }],
                xAxes: [{
                    gridLines: {
                        display: false
                    },
                    barPercentage: 1.5,

                    ticks: {
                        fontSize: 8,
                        mirror: true,
                        padding: 5,
                        maxRotation: 0,
                        minRotation: 0,
                        callback: function (label) {
                            if (/\s/.test(label)) {
                                return label.match(/\b[\w']+(?:[^\w\n]+[\w']+){0,1}\b/g);
                            } else {
                                return label;
                            }
                        }
                    }
                }]
            }
        };

        var ctx = document.getElementById("chart_0");
        var chart = Chart.Bar(ctx, {
            type: 'bar',
            options: option, reponsive: true,
            data: chart_data
        });

        dd.on("change", () => restyleType(chart));
    })
}

function restyleType(chart) {
    var query = dd.property("value")
    d3.json(`/api/v1.0/type_query/${query}`).then(data => {
        chart.data.labels = data.map(obj => obj.Name);
        chart.data.datasets[0].data = data.slice(0, 5).map(obj => parseFloat(obj.Price));
        chart.data.datasets[1].data = [0, 0, 0, 0, 0].concat(data.slice(5, 10).map(obj => parseFloat(obj.Price)));
        chart.update();
    })
}
// End of Random Bar Chart