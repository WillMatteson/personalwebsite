import  { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const RadarChart = () => {
    const [chartOptions, setChartOptions] = useState({
        chart: {
            height: 350,
            type: 'radar',
        },
        title: {
            text: 'Basic Radar Chart',
        },
        xaxis: {
            categories: ['January', 'February', 'March', 'April', 'May', 'June'],
        },
    });

    const [chartSeries, setChartSeries] = useState([
        {
            name: 'Series 1',
            data: [80, 50, 30, 40, 100, 20],
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
