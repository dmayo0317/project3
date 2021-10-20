// Plots function
function buildCharts(sample) {


    var dataUrl = `/api/v1.0/price_select/${sample}`;
    console.log("url", dataUrl)

    var priceInfo;
    d3.json(dataUrl).then((data) => {
        console.log("charts", data)

        var pricing = data.map(d => d.Price);
        var brands = data.map(d => d.Brand);
        var names = data.map(d => d.Name);
        var stores = data.map(d => d.Store)
        var types = data.map(d => d.Type)




        console.log("price & brands", pricing, brands, names)
        //   var sample_values = resultArray.map(info => info.amount);

        // Build a Bubble Chart
        var bubbleLayout = {
            title: "Grocery Pricings",
            margin: { t: 0 },
            hovermode: "closest",
            xaxis: { title: "Brand Names" },
            margin: { t: 30 }
        };
        var bubbleData = [
            {
                x: brands,
                y: pricing,
                //   text: otu_labels,
                mode: "markers",
                marker: {
                    size: pricing,
                    color: pricing,
                    // colorscale: "Earth"
                }
            }
        ];

        Plotly.newPlot("bubble", bubbleData, bubbleLayout);




        ///Bar Chart

        //   var yticks = otu_ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse();
        var barData = [
            {
                y: brands,
                x: pricing,
                //   text: otu_labels.slice(0, 10).reverse(),
                type: "bar",
                orientation: "h",
            }
        ];

        var barLayout = {
            title: "Pricing",
            margin: { t: 30, l: 150 }
        };

        Plotly.newPlot("bar", barData, barLayout);
        //   buildMetadata(userInfo);



        // Beginning Scattr plot

        // walmart
        var trace1 = {
            x: types.count,
            y: stores,
            mode: 'markers',
            type: 'lines',
            // transforms: [{
            //     type: 'filter',
            //     target: 'y',
            //     value:"Walmart"
            // }]
        };

        // wholefoods
        // var trace2 = {
        //     x: types,
        //     y: stores,
        //     mode: 'lines+markers',
        //     type: 'scatter'
        // };

        var data = [trace1];

        Plotly.newPlot('scatter', data);

    });
}

//Setting up the selector
d3.json("/api/v1.0/price_select/").then(function (data) {

    var dropdown = d3.select('#selDataset')
    data.price.forEach(sample => {
        dropdown.append('option').property('value', sample).text(sample)
    });

    buildCharts(sample)

});
