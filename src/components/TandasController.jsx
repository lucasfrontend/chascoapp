import React, { useRef, forwardRef, useImperativeHandle } from "react";
// import Tanda from './dumbComponents/tanda'
import HeaderTandas from './HeaderTandas'
import ReactScrollableFeed from 'react-scrollable-feed'
import { DownloadTableExcel } from 'react-export-table-to-excel';

const TandasController = forwardRef(({ tandas, setEditData, deleteTanda, endOfDay }, ref) => {
    
    const tableRef = useRef(null);
    const btn_ref = useRef(null)
    const colorSelected = () => setColor(visible)
    
    return <>
    <div className="flex-grow dark:bg-gray-900 overflow-y-auto p-6">
        <HeaderTandas tandas={tandas} />
        <div class="cards card tabla-container">
            <DownloadTableExcel
                filename="users table"
                sheet="users"
                currentTableRef={tableRef.current}>

                <button className="bg-transparent hover:bg-active hover:text-white cursor-pointer font-semibold py-2 px-4 border border-gray-400 rounded shadow"> Export excel </button>
            </DownloadTableExcel>
            <table class="table" ref={tableRef}>
                <thead className="min-w-full">
                        <div className="bg-black ">
                            <tr className="w-full flex justify-between p-4">
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                    Nro
                                </th>
                                <th className="px-5 py-3 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                    Plaza
                                </th>
                                <th className="px-5 py-3 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                    Plaza
                                </th>
                                <th className="px-5 py-3 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                    Plaza
                                </th>
                                <th className="px-5 py-3 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                    Plaza
                                </th>
                                <th className="px-5 py-3 border-gray-200 bg-gray-100">Piloto</th>
                                <th className="px-5 py-3 border-gray-200 bg-gray-100">Altura</th>
                                <th className="px-5 py-3 border-gray-200 bg-gray-100">Avión</th>
                            </tr>
                            </div >
                </thead>
                <tbody className="bg-white " style={{
                        height: '50vh',
                        width: '100vh'
                    }}>
                <ReactScrollableFeed className="min-w-full">
                {
                            tandas.length === 0 ? <td>Aun no hay tandas</td>
                            : tandas.sort((a, b) => a.number_tanda - b.number_tanda)
                            .map((tanda, index) => {
                                return <tr key={index} className=" items-center ">
                                    <td className="items-center w-30"> {tanda.number_tanda}</td>
                                    <td className="items-center w-30"> {tanda.paraca_1.charAt(0).toUpperCase() + tanda.paraca_1.slice(1)}</td>
                                    <td className="items-center w-30"> {tanda.paraca_2.charAt(0).toUpperCase() + tanda.paraca_2.slice(1)}</td>
                                    <td className="items-center w-30"> {tanda.paraca_3.charAt(0).toUpperCase() + tanda.paraca_3.slice(1)}</td>
                                    <td className="items-center w-30"> {tanda.paraca_4.charAt(0).toUpperCase() + tanda.paraca_4.slice(1)}</td>
                                    <td className="items-center w-30"> {tanda.pilot.charAt(0).toUpperCase() + tanda.pilot.slice(1)}</td>
                                    <td className="items-center w-30"> {tanda.altitude.charAt(0).toUpperCase() + tanda.altitude.slice(1)}</td>
                                    <td className="items-center w-30"> {tanda.avion.charAt(0).toUpperCase() + tanda.avion.slice(1)}</td>
                                    <td >
                                        <button ref={btn_ref} onClick={() => setEditData(tanda)} className="fill-green">
                                            <svg viewBox="0 0 16 16">
                                                <path class="path1" d="M13.5 0c1.381 0 2.5 1.119 2.5 2.5 0 0.563-0.186 1.082-0.5 1.5l-1 1-3.5-3.5 1-1c0.418-0.314 0.937-0.5 1.5-0.5zM1 11.5l-1 4.5 4.5-1 9.25-9.25-3.5-3.5-9.25 9.25zM11.181 5.681l-7 7-0.862-0.862 7-7 0.862 0.862z"></path>
                                            </svg>
                                        </button>

                                        <button classNameName="text-green fill-green text-1xl" onClick={() => deleteTanda(tanda.id)}>
                                            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                <polyline points="76.91 31.66 76.91 92.53 21.9 92.53 21.9 31.66"/>
                                                <rect x="16.56" y="16.44" width="65.7" height="9.88"/>
                                                <line x1="34.01" y1="40.69" x2="34.01" y2="81.02"/>
                                                <line x1="49.41" y1="40.69" x2="49.41" y2="81.02"/>
                                                <line x1="64.8" y1="40.69" x2="64.8" y2="81.02"/>
                                                <path d="M37.25,16.44V12.31h0a5.14,5.14,0,0,1,4.83-5.4H56.73a5.14,5.14,0,0,1,4.83,5.4v4.13"/>
                                            </svg>
                                        </button>
                                    </td>
                            </tr>
                            })
                        }
                </ReactScrollableFeed >
                </tbody>
            </table>
        </div>
    </div>
    </>

})

export default TandasController