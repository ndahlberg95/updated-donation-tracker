import React from 'react';
// import Chart from "react-google-charts";


function Graph() {

    // function drawGraph() {
    //     var data = google.visualization.arrayToDataTable([
    //         ['Items', 'Leggings', 'Shampoo', 'Shoes'],
    //         ['Yearly', 524, 627, 485],
    //     ]);

    //     var options = {
    //         chart: {
    //             title: "Last Year's Donated Items",
    //             subtitle: 'Top 3 Items',
    //         },
    //         bars: 'horizontal' // Required for Material Bar Charts.
    //     };

    //     var barGraph = new google.charts.Bar(document.getElementById('barchart_material'));

    //     chart.draw(data, google.charts.Bar.convertOptions(options));
    // }
    return (
        <div className="column" id="item-graph">
            <h2>Item List</h2>
            <p id="item-1"></p>
            {/* bar graph displaying item quantities  */}
            <div id="barchart_material"></div>
        </div>
    )


}

export default Graph;