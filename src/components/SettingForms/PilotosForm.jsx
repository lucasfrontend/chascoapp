import React, { useState } from "react";

const pilotsInitial = [
    { name: '', id: null},
    { name: '', id: null},
  
]

const PilotosForm = ({ createDataPilots, updateDataPilots, dataToEditPilots, setDataToEditPilot}) => {

    const [formPilots, setFormPilots ] = useState(pilotsInitial)

    const handleChange = (e) => {
        setFormPilots({
            ...formPilots,
            [e.target.name]: e.target.value
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!formPilots.name){
            alert("Datos incompletos");
            return;
        } 
        if (formPilots.id === null){
            createDataPilots(formPilots);
        } else {
            updateDataPilots(formPilots)
        }
        handleReset()
    }

    const handleReset = (e) => {
        setFormPilots(pilotsInitial)
        setDataToEditPilot(null)

    }
 
    return <>
        <form className="space-y-4 mt-3" onSubmit={handleSubmit}>
            <div className="bg-dark p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow">
            <div className="flex xl:flex-row flex-col items-center font-medium text-gray-900 dark:text-white pb-2 mb-2 xl:border-b border-gray-200 border-opacity-75 dark:border-gray-700 w-full">
                <label htmlFor="paraca_1" className="pr-2">Pilotos</label>
                <input className="bg-dark w-full" type="text" name="paraca_1" onChange={handleChange} value={pilotsInitial.name}/>
            </div>
            </div>

            <div className="flex justify-end">
            <input class="bg-transparent hover:bg-active hover:text-white cursor-pointer font-semibold py-2 px-4 border border-blue-500 hover:border-transparent rounded mr-4" type="submit" value="Enviar"/>
            <input class="bg-transparent hover:bg-active hover:text-white cursor-pointer font-semibold py-2 px-4 border border-gray-400 rounded shadow" type="reset" value="Reset" onClick={handleReset} />
            </div>
        </form>
    </>

}

export default PilotosForm;