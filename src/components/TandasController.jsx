import React, { useState } from "react";
// import Tanda from './dumbComponents/tanda'
import HeaderTandas from './HeaderTandas'

const TandasController = ({ tandas, setEditData, deleteTanda, endOfDay }) => {
    
    return <>
    <div class="flex-grow bg-sdch dark:bg-gray-900 overflow-y-auto">
        <HeaderTandas tandas={tandas} />
        <div class="sm:p-7 p-4">
            <table class="w-full text-left">
                <thead>
                    <tr class="text-sdch">
                        <th class="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">id</th>
                        <th class="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">Plaza 1</th>
                        <th class="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 hidden md:table-cell">Plaza 2</th>
                        <th class="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">Plaza 3</th>
                        <th class="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">plaza 4</th>
                        <th class="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">Piloto</th>
                        <th class="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">Altura</th>
                        <th class="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">Avion</th>
                    </tr>
                </thead>
                <tbody class="text-gray-600 dark:text-gray-100">
                        {
                            tandas.length === 0 ? <td>Aun no hay tandas</td>
                            : tandas.map((tanda, index) => {
                                return <tr key={index}>
                                <td class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                                    <div class="flex items-center">
                                        { tanda.id}
                                    </div>
                                </td>
                                <td class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 text-light">
                                    <div class="flex items-center">
                                        { tanda.paraca_1}
                                    </div>
                                </td>
                                <td class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell hidden text-light">{ tanda.paraca_2}</td>

                                <td class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 text-green-500 text-light">{ tanda.paraca_3}</td>
                                
                                <td class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 text-green-500 text-light">{ tanda.paraca_4}</td>

                                <td class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 text-green-500 text-light">{ tanda.pilot}</td>

                                <td class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 text-green-500 text-light">{ tanda.altitude}</td>

                                <td class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 text-green-500 text-light">{ tanda.avion}
                                    <div class="flex items-center">
                                        <svg viewBox="0 0 24 24" class="w-4 mr-5 text-green-500" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <line x1="12" y1="5" x2="12" y2="19"></line>
                                            <polyline points="19 12 12 19 5 12"></polyline>
                                        </svg>
                                    </div>
                                </td>
                                <td>
                                    <button class="bg-blue-500 text-light" onClick={() => setEditData(tanda)}>Editar</button>

                                    <button class="text-light" onClick={() => deleteTanda(tanda.id)}>Eliminar</button>
                                </td>
                        
                                </tr>
                            })
                        }
                    <tr>


                    </tr>
                </tbody>
            </table>

            <div class="flex w-full mt-5 space-x-2 justify-end">
                <button class="inline-flex items-center h-8 w-8 justify-center text-gray-400 rounded-md shadow border border-gray-200 dark:border-gray-800 leading-none">
                <svg class="w-4" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
                </button>
                <button class="inline-flex items-center h-8 w-8 justify-center text-gray-500 rounded-md shadow border border-gray-200 dark:border-gray-800 leading-none">1</button>
                <button class="inline-flex items-center h-8 w-8 justify-center text-gray-500 rounded-md shadow border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-800 dark:text-white leading-none">2</button>
                <button class="inline-flex items-center h-8 w-8 justify-center text-gray-500 rounded-md shadow border border-gray-200 dark:border-gray-800 leading-none">3</button>
                <button class="inline-flex items-center h-8 w-8 justify-center text-gray-500 rounded-md shadow border border-gray-200 dark:border-gray-800 leading-none">4</button>
                <button class="inline-flex items-center h-8 w-8 justify-center text-gray-400 rounded-md shadow border border-gray-200 dark:border-gray-800 leading-none">
                <svg class="w-4" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
                </button>
            </div>
        </div>

        <button onClick={() => endOfDay(tandas)}>Fin del día</button>
    </div>
    </>

}

export default TandasController