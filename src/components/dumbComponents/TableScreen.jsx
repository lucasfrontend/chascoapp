import React, { useEffect, useState } from "react";
import ReactScrollableFeed from 'react-scrollable-feed'

const TableScreen = () => {
    const [tanda, setTanda] = useState(JSON.parse(localStorage.getItem('tandasData')))

    console.log(tanda)
    
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
                {tanda?.map((tanda, index) => (
                    <tr key={tanda.id}>
                        <td>{tanda.index}</td>
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