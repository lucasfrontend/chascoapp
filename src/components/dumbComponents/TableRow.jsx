import React from "react";

const TableRow = ({ el, setDataToEditPilot, deleteDataPilots }) => {

    return <>
        <tr>
            <td> { el.name}</td>
            <td> { el.id}</td>
            <td>
                <button onClick={() => setDataToEditPilot(el)}>Edit</button>
                <button onClick={() => deleteDataPilots(el.id)}>Delete</button>
            </td>
        </tr>
    </>

}

export default TableRow;