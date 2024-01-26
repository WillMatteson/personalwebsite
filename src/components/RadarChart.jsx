import  { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const RadarChart = () => {
    const [chartOptions, setChartOptions] = useState({
        chart: {
            height: 350,
            type: 'radar',
        },
        title: {
            text: 'Skill tree',
        },
        xaxis: {
            categories: ['Game monetization', 'Game services', 'Docker', 'EVM'],
        },
    });

    const [chartSeries, setChartSeries] = useState([
        {
            name: 'Series 1',
            data: [90, 70, 60, 99],
            yaxis: {
                max: 100
            }
        },
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
