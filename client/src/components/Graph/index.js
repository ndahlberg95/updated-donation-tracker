import React from 'react';
import Chart from "react-google-charts";
import './index.css';


function Graph() {


    //Inital Data state
    const [data, setData] = React.useState([
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
    }, [])





    //Generating Chart
    const generateChart = () => {
        return (
            <div className='graphDiv' style={{ display: 'flex', maxWidth: 900 }}>
                <Chart
                    width={'500px'}
                    height={'500px'}
                    chartType="Bar"
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['Item', 'Amount'],
                        ['Socks', 24],
                        ['Blankets', 6],
                        ['Toenails', 91]
                       
                    ]}
                    options={{
                        // Material design options
                        chart: {
                            title: 'Number of Donated Items',
                            subtitle: ':)',
                        },
                        colors: ['#014E76']
                    }}
                    // For tests
                    rootProps={{ 'data-testid': '2' }}
                />
            </div>
        )
    }



    return (
        <div>{generateChart()}</div>
    )


}

export default Graph;