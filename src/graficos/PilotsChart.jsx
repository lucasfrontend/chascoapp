import React from 'react';
import { Pie } from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto'


const PilotsChart = ({chartData}) => {

    return <>
    <h1>holi</h1>
    <Pie data={chartData}/>
    </>

}

export default PilotsChart;