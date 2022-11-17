import React, { useRef, forwardRef, useImperativeHandle } from "react";
// import Tanda from './dumbComponents/tanda'
import HeaderTandas from './HeaderTandas'

const TandasController = forwardRef(({ tandas, setEditData, deleteTanda, endOfDay }, ref) => {

    const btn_ref = useRef(null)

    const colorSelected = () => setColor(visible)
    
    return <>
    <div className="flex-grow dark:bg-gray-900 overflow-y-auto p-6">
        <HeaderTandas tandas={tandas} />
        <div class="cards card tabla-container">
            <table class="table">
                <thead>
                    <tr>
                    <th>Numero</th>
                    <th>Plaza</th>
                    <th>Plaza</th>
                    <th>Plaza</th>
                    <th>Plaza</th>
                    <th>Pilot</th>
                    <th>Altura</th>
                    <th>Avión</th>
                    <th>ed/dl</th>
                    </tr>
                </thead>
                <tbody>
                {
                            tandas.length === 0 ? <td>Aun no hay tandas</td>
                            : tandas.map((tanda, index) => {
                                return <tr key={index}>
                                    <td> {tanda.number_tanda}</td>
                                    <td> {tanda.paraca_1}</td>
                                    <td> {tanda.paraca_2}</td>
                                    <td> {tanda.paraca_3}</td>
                                    <td> {tanda.paraca_4}</td>
                                    <td> {tanda.pilot}</td>
                                    <td> {tanda.altitude}</td>
                                    <td> {tanda.avion}</td>
                                    <td>
                                        <button ref={btn_ref} onClick={() => setEditData(tanda)}>Editar</button>

                                        <button classNameName="text-light" onClick={() => deleteTanda(tanda.id)}>Eliminar</button>
                                    </td>
                            </tr>
                            })
                        }
                </tbody>
            </table>
            <input class="bg-transparent hover:bg-active hover:text-white cursor-pointer font-semibold py-2 px-4 border border-blue-500 hover:border-transparent rounded mr-4" type="submit" value="Fin del dia" onClick={() => endOfDay(tandas)}/>
        </div>
    </div>
    </>

})

export default TandasController