import React from "react";
import TableRow from "../dumbComponents/TableRow";

const PilotosTabla = ({ data }) => {
 
    return <>
            <table class="table">
                <thead>
                    <tr>
                    <th>Nombre</th>
                    <th>ID</th>
                    <th>borrar / edit</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        data.length === 0 ? 
                        (<tr><td className="table-auto">No hay piloto o qué?</td></tr>) 
                        : data.map( el => <TableRow key={el.id} el={el}/>)
                    }

                </tbody>
            </table>

    </>

}

export default PilotosTabla;