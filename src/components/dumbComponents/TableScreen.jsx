import React, { useEffect, useState } from "react";
import { useTandas } from "../../hooks/useTandas";
import ReactScrollableFeed from 'react-scrollable-feed'

const TableScreen = () => {
//    const [tanda, setTanda] = useState(JSON.parse(localStorage.getItem('tandasData')))
    const { tandas } = useTandas({})
    console.log(tandas)
    
    return <>
        <table>
            <thead>
                <tr>
                    <th>Plaza</th>
                    <th>Plaza</th>
                    <th>Plaza</th>
                    <th>Plaza</th>
                </tr>
            </thead>
            <tbody>
                {tandas?.map((tanda, index) => (
                    <tr key={tanda.id}>
                        <td>{tanda.id}</td>
                        <td>{tanda.paraca_1}</td>
                        <td>{tanda.paraca_2}</td>
                        <td>{tanda.paraca_3}</td>
                        <td>{tanda.paraca_4}</td>

                    </tr>
                ))}
            </tbody>
        </table>
    </>

}

export default TableScreen