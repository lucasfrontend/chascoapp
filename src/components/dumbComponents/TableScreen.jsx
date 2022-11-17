import React, { useEffect, useState } from "react";
import ReactScrollableFeed from 'react-scrollable-feed'
import Footer from "./Footer";

const TableScreen = () => {
    const [tandas, setTandas] = useState(() => {
        const saveTandas = window.localStorage.getItem('tandasData');
        if(saveTandas) {
            return JSON.parse(saveTandas);
        } else {
            return []
        }
    })
    
    useEffect(() => {
        window.addEventListener('storage', () => {
          const tandas = JSON.parse(localStorage.getItem('tandasData'))
          setTandas(tandas);
        })
      }, []);
      console.log('A ver ahora', tandas);

    return <>
        <table className="w-screen bg-green" >
            <thead>
                <tr style={{
                    height: '10vh'
                }}>
                    <th className="w-2">Plaza 1</th>
                    <th className="w-2">Plaza</th>
                    <th className="w-2">Plaza</th>
                    <th className="w-2">Plaza</th>
                    <th className="w-2">Plaza</th>
                    <th className="w-2">Plaza</th>
                    <th className="w-2">Plaza</th>
                </tr>
            </thead>
            <tbody className="text-gray-600 dark:text-gray-100">
                <div className="overflow-y-scroll" style={{
                    height: '90vh',
                }}>
                    <ReactScrollableFeed>
                    {
                        tandas.length === 0 ? <td>Aun no hay tandas</td>
                        : tandas.map((tanda, index) => {
                            return <tr key={index}>
                                <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 text-green-500 text-light">
                                    <div className="flex items-center">
                                        { index}
                                    </div>
                                </td>
                                <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 text-green-500 text-light">
                                    <div className="flex items-center">
                                        {}
                                    </div>
                                </td>
                                <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 text-green-500 text-light">
                                    <div class="flex items-center">
                                        { tanda.paraca_1}
                                    </div>
                                </td>
                                <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell hidden text-light">{ tanda.paraca_2}</td>
                                <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 text-green-500 text-light">{ tanda.paraca_3}</td>
                                <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 text-green-500 text-light">{ tanda.paraca_4}</td>
                                <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 text-green-500 text-light">{ tanda.pilot}</td>
                                <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 text-green-500 text-light">{ tanda.altitude}</td>
                                <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 text-green-500 text-light">{ tanda.avion}
                                    <div className="flex items-center">
                                        <svg viewBox="0 0 24 24" className="w-4 mr-5 text-green-500" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <line x1="12" y1="5" x2="12" y2="19"></line>
                                            <polyline points="19 12 12 19 5 12"></polyline>
                                        </svg>
                                    </div>
                                </td>
                            </tr>
                        })
                    }
                    </ReactScrollableFeed >
                </div>
            </tbody>
        </table>
        <Footer />

    </>

}

export default TableScreen