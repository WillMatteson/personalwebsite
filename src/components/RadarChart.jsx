import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const RadarChart = () => {
    const [chartOptions, setChartOptions] = useState({
        chart: {
            height: 800,
            type: 'radar',
        },
        title: {
            margin: 0, // Smaller value reduces space below the title
            offsetY: 0,
            text: 'Skill tree',
            style: {
                fontFamily: 'MS Windows 95', // Set font for title
            },
        },
        xaxis: {
            categories: ['Product', 'Coding', 'Growth', 'Mandarin', 'Blockchains', 'Game design', 'Game Economics', 'Docker', 'Game services' ],
            labels: {
                style: {
                    fontFamily: 'MS Windows 95', // Set font for x-axis labels
                },
            },
        },
        yaxis: {
            tickAmount:4,
            stepsize: 25,
            max:100,
            min:0,
            labels: {
                style: {
                    fontFamily: 'MS Windows 95', // Set font for x-axis labels
                },
            },
        },
        grid: {
            padding: {
                bottom: -20, // Reduce bottom padding
                top:-20
                // Other padding options...
            },
            // Other grid options...
        },

        
    });

    const [chartSeries, setChartSeries] = useState([
        {
            name: 'Series 1',
            data: [99, 30, 70, 35, 99, 80, 90, 50, 90],
        },
        // ... other series data
    ]);

    return (
        <div>
            <div id="chart">
                <ReactApexChart options={chartOptions} series={chartSeries} type="radar" height={350} />
            </div>
            <div id="html-dist"></div>
        </div>
    );
};

export default RadarChart;
