import React from "react";
import TableRow from "../dumbComponents/TableRow";

const PilotosTabla = ({ data, setDataToEditPilot, deleteDataPilots }) => {
 
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
                        (<tr><td className="table-auto">Que Pilot vuela hoy?</td></tr>) 
                        : data.map( el => <TableRow key={el.id} el={el} setDataToEditPilot={setDataToEditPilot} deleteDataPilots={deleteDataPilots}/>)
                    }

                </tbody>
            </table>

    </>

}

export default PilotosTabla;