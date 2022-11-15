import React, {useEffect, useState} from "react";
import TandasForm from "./TandasForm";
import TandasController from "./TandasController";
import { useTandas } from "../hooks/useTandas";

const dataBase = [
    {id:1, paraca_1: 'barri', paraca_2: 'lucho', paraca_3: 'laurita', paraca_4: 'chechu'},
    {id:2, paraca_1: 'nadie', paraca_2: 'nadia', paraca_3: 'laurita', paraca_4: 'chechu'},
    {id:3, paraca_1: 'ruben', paraca_2: 'noe', paraca_3: 'laurita', paraca_4: 'chechu'}

]
const TandasMain = () => {

    const { addTanda, editTanda, editData, tandas, setEditData, deleteTanda } = useTandas({})

    console.log(tandas, "culo")
    const endOfDay = () => {
        localStorage.clear();
    }
    return <>
          <div class="flex-grow flex overflow-x-hidden">
            <TandasForm addTanda={addTanda} editTanda={editTanda} editData={editData}/>
            <TandasController tandas={tandas} setEditData={setEditData} deleteTanda={deleteTanda} endOfDay={endOfDay}/>
      </div>
        </>
}

export default TandasMain