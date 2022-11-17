import { data } from "autoprefixer";
import React, { useState } from "react";
import PilotsChart from "../graficos/PilotsChart";

const datosPilots = [ 
    {
        id: 1,
        name: 'Tano',
        vuelos: 9
    },
    {
        id: 2,
        name: 'Pilotito',
        vuelos: 9
    },
]

const Data = () => {
    const [ pilotData, setPilotData] = useState({
        labels: datosPilots.map((data) => data.name),
        datasets: [{
            label: 'Pilotos',
            data: datosPilots.map((data) => data.vuelos),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
        }]
    })
    return <>
    <div className="bg-dark">
        <div className="w-3/12">
            <PilotsChart chartData={pilotData}/>
        </div>

    </div>
    </>
    

}

export default Data