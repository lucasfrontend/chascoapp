import React, {useEffect, useState} from "react";
import TandasForm from "./TandasForm";
import TandasController from "./TandasController";
/*
const dataBase = [
    {id:1, paraca_1: 'barri', paraca_2: 'lucho', paraca_3: 'laurita', paraca_4: 'chechu'},
    {id:2, paraca_1: 'nadie', paraca_2: 'nadia', paraca_3: 'laurita', paraca_4: 'chechu'},
    {id:3, paraca_1: 'ruben', paraca_2: 'noe', paraca_3: 'laurita', paraca_4: 'chechu'}

]*/
const TandasMain = () => {
    const [editData, setEditData] = useState(null);
    const [tandas, setTandas] = useState(() => {
        const saveTandas = window.localStorage.getItem('tandasData');
        if(saveTandas) {
            return JSON.parse(saveTandas);
        } else {
            return []
        }
    });

    useEffect(() => {
        window.localStorage.setItem('tandasData', JSON.stringify(tandas))
    }, [tandas])

    const addTanda = (tanda)=> {
        setTandas([
            ...tandas,
            tanda
        ])
    }

    const editTanda = (tanda) => {
        const newTandas = tandas.map(el => el.id === tanda.id ? tanda : el)
        setTandas(newTandas)
        setEditData(null)
    }

    const deleteTanda = id => {
        const isDelete = window.confirm(`Vas a eliminar la tanda ${id}`)
        if(isDelete) {
            const newTandas = tandas.filter(el => el.id !== id)
            setTandas(newTandas);
        }
    }

    const endOfDay = () => {
        alert("Vas a borrar todas las tandas.")
        window.localStorage.clear();
    }
    return <>
          <div class="flex-grow flex overflow-x-hidden">
            <TandasForm addTanda={addTanda} editTanda={editTanda} editData={editData}/>
            <TandasController tandas={tandas} setEditData={setEditData} deleteTanda={deleteTanda} endOfDay={endOfDay}/>
      </div>
        </>
}

export default TandasMain