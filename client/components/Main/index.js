import React from 'react';


function Main() {


    // google.charts.load('current', { 'packages': ['bar'] });
    // google.charts.setOnLoadCallback(drawChart);


    // function drawChart() {
    //   var data = google.visualization.arrayToDataTable([
    //     ['Items', 'Leggings', 'Shampoo', 'Shoes'],
    //     ['Yearly', 524, 627, 485],
    //   ]);

    //   var options = {
    //     chart: {
    //       title: "Last Year's Donated Items",
    //       subtitle: 'Top 3 Items',
    //     },
    //     bars: 'horizontal' // Required for Material Bar Charts.
    //   };

    //   var chart = new google.charts.Bar(document.getElementById('barchart_material'));

    //   chart.draw(data, google.charts.Bar.convertOptions(options));
    // }

    return (

        <body>
            <div className="column">
                <div id="top-stats">
                    <div id="need-most">
                        <div id="min"></div>
                        <h3>MOST NEEDED ITEM</h3>
                    </div>

                    <div id="total-donations">
                        <div id="sum"></div>
                        <h3>TOTAL DONATIONS</h3>
                    </div>

                    <div id="have-most">
                        <div id="max"></div>
                        <h3>MOST DONATED ITEM</h3>
                    </div>
                </div>

                {/* <!-- Donation Input Fields --> */}
                <div>
                    <form>
                        <div id="donation-input">
                            {/* <!-- Item Name (Text Field)--> */}
                            <div className="field">
                                <label className="label">
                                    <h3>Item Name</h3>
                                </label>
                                <div className="control">
                                    <input className="input" id="item-name" type="text" placeholder="e.g Toothpaste">
                                    </input>
                                </div>

                                {/* <!-- Item Category (Drop Down Menu)--> */}


                                <div className="field">
                                    {/* <!-- Value (Text Field)--> */}
                                    <div className="field has-addons has-addons-right">


                                    </div>
                                    {/* <!--GIF Displayed--> */}
                                    {/* <!--local storage save--> */}
                                    <div id="result"></div>



                                    <button id="save" type="submit">
                                        Submit Donation
                                    </button>

                                    {/* <!--GIF Displayed--> */}
                                    <div id="myDIV" className="myDIV">
                                        <iframe src="https://giphy.com/embed/l0MYt5jPR6QX5pnqM" width="480" height="270" frameBorder="0"
                                            className="giphy-embed" allowFullScreen></iframe>
                                        <p><a href="https://giphy.com/gifs/party-the-office-hard-l0MYt5jPR6QX5pnqM">via GIPHY</a></p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </body >
       
    )
}

export default Main;