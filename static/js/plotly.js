let dropdownPrice = d3.select("#selDataset");

// Plots function
function buildCharts(sample) {


    var dataUrl = `/api/v1.0/price_select/${sample}`;
    console.log("url", dataUrl)

    var priceInfo;
    d3.json(dataUrl).then((data) => {
        console.log("charts", data)

        var responsive = { responsive: true }

        var pricing = data.map(d => d.Price);
        var brands = data.map(d => d.Brand);
        var names = data.map(d => d.Name);
        var stores = data.map(d => d.Store)
        var types = data.map(d => d.Type)

        console.log("price & brands", pricing, brands, names)

        //   var sample_values = resultArray.map(info => info.amount);

        // Build a Bubble Chart
        // var bubbleLayout = {
        //     title: "Grocery Pricings",
        //     margin: { t: 0 },
        //     hovermode: "closest",
        //     xaxis: { title: "Brand Names" },
        //     margin: { t: 30 }
        // };
        // var bubbleData = [
        //     {
        //         x: stores,
        //         y: pricing,
        //         //   text: otu_labels,
        //         mode: "markers",
        //         marker: {
        //             size: pricing,
        //             color: pricing,
        //             // colorscale: "Earth"
        //         }
        //     }
        // ];

        // Plotly.newPlot("bubble", bubbleData, bubbleLayout);




        ///Bar Chart
        function onlyUnique(value, index, self) {
            return self.indexOf(value) === index;
          }
          
        var barData = [
            {
                y: brands.filter(onlyUnique),
                x: pricing,
                //   text: otu_labels.slice(0, 10).reverse(),
                type: "bar",
                orientation: "h",
                order: "ascending"

            }
        ];


        var barLayout = {
            // title: "Brands Pricing Comparison",
            margin: { t: 30, l: 150 },
            xaxis: {
                title: 'Price',
                titlefont: {
                    family: 'Arial, sans-serif',
                    size: 18,
                    color: 'black'
                }
            },
            yaxis: {
                // title: 'Brands',
                titlefont: {
                    family: 'Arial, sans-serif',
                    size: 18,
                    color: 'black',
                    margin: 30, 
                },
                title: {
                    display: true,
                    // text: "Brands",
                    padding:{
                        top: 30,
                        bottom: 30
                    }

                }
            },
        };

        Plotly.newPlot("bar", barData, barLayout, responsive);
        //   buildMetadata(userInfo);
        // Beginning Scattr plot

        // walmart
        var trace1 = {
            x: types,
            y: stores["Walmart"],
            mode: 'markers',
            name: 'Walmart',
            type: 'scatter',
            // transforms: [{
            //     type: 'filter',
            //     target: 'y',
            //     value:"Walmart"
            // }]
        };

        // wholefoods
        var trace2 = {
            x: types,
            y: stores["Whole Foods"],
            mode: 'markers',
            name: 'Whole Foods',
            type: 'scatter'
        };

        var layout = {
            xaxis: {
            //   range: [ 0.75, 5.25 ]
            },
            yaxis: {
            //   range: [0, 8]
            },
            // title:'Type Store Comparison'
          };

        var data = [trace1, trace2];

        Plotly.newPlot('scatter', data, layout, responsive);

    });
}

// //Setting up the selector
d3.json("/api/v1.0/price_select/").then(function (data) {

    var dropdown = d3.select('#selDataset')
    data.price.forEach(sample => {
        dropdown.append('option').property('value', sample).text(sample)
    });

    buildCharts(sample)

});

buildCharts(0);