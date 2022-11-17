import React from "react";

const TableRow = ({ el }) => {
    return <>
        <tr>
            <td> { el.name}</td>
            <td> { el.id}</td>
            <td>
                <button>Edit</button>
                <button>Delete</button>
            </td>
        </tr>
    </>

}

export default TableRow;