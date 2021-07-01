import React from 'react';
import Chart from "react-google-charts";
import './index.css';


function Graph() {


    //Inital Data state
    const [data,setData] = React.useState([
        ['Items', '2010 Population', '2000 Population'],
        ['New York City, NY', 8175000, 8008000],
        ['Los Angeles, CA', 3792000, 3694000],
        ['Chicago, IL', 2695000, 2896000],
        ['Houston, TX', 2099000, 1953000],
        ['Philadelphia, PA', 1526000, 1517000],
    ])



    //Running on render
    React.useEffect(() => {
        //Retrive data
    },[])

       



        //Generating Chart
        const generateChart = () => {
            return (
                <div className='graphDiv' style={{ display: 'flex', maxWidth: 900 }}>
                    <Chart
                        width={1500}
                        height={300}
                        chartType="ColumnChart"
                        loader={<div>Loading Chart</div>}
                        data={data}
                        options={{
                            title: 'Items',
                            chartArea: { width: '30%' },
                            hAxis: {
                                title: 'Total Population',
                                minValue: 0,
                            },
                            vAxis: {
                                title: 'City',
                            },
                        }}
                        legendToggle
                    />
                </div>
            )
        }



        return (
            <div>{generateChart()}</div>
        )


    }

export default Graph;