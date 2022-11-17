import React, { useEffect, useState, useRef } from "react";

// const pilots = ['Tano,', 'Pilotito', 'Fer Lopez', 'Otro']

const TandasForm = ({ addTanda, editTanda, editData }) => {

    const color = useRef('bg-light')

    console.log("REF,CURRENT", color.current)
    const [formData, setFormData] = useState({
        id: null,
        number_tanda: '',
        paraca_1: '',
        paraca_2: '',
        paraca_3: '',
        paraca_4: '',
        pilot: '',
        altitude: '',
        avion: ''
    })
    
    useEffect(() => {
        if(editData !== null){
            changeColorEdit()
            setFormData(editData);
        }else {
            changeColorOrigin()
            setFormData({
                id: null,
                number_tanda: '',
                paraca_1: '',
                paraca_2: '',
                paraca_3: '',
                paraca_4: '', 
                pilot: '',
                altitude: '',
                avion: ''
            })
        }
    }, [editData])
    
    const changeColorEdit = () => {
        const nodo = color.current
        if(nodo.className === 'blue_sdch'){
            nodo.className  = 'blue_sdch_selected';
        } 
        
    }

    const changeColorOrigin = () => {
        const nodo = color.current
        if(nodo.className === 'blue_sdch_selected'){
            nodo.className  = 'blue_sdch';
        } 
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
            if(editData !== null) {
                editTanda(formData)
            } else {
                formData.id = Math.random().toString(36).substring(0, 7)
                addTanda(formData)
                setFormData({
                    id: null,
                    number_tanda: '',
                    paraca_1: '',
                    paraca_2: '',
                    paraca_3: '',
                    paraca_4: '',
                    pilot: '',
                    altitude: '',
                    avion: ''
                })
            }
    }

    const handleChange =(e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleReset =(e) => {
        changeColorOrigin()
        setFormData({
            id: null,
            number_tanda: '',
            paraca_1: '',
            paraca_2: '',
            paraca_3: '',
            paraca_4: '',
            pilot: '',
            altitude: '',
            avion: ''
        })
    }

    return <>
    <div className="mt-6 ml-6 mb-6">
        <div className="blue_sdch" ref={color}>
            <div className="activity card">
            {formData.id ? <div class="title text-green">Editar Tanda {formData.id}</div> : <div class="title text-blue">Nueva Tanda {formData.id}</div>}
                <form className="space-y-4 mt-3" onSubmit={handleSubmit}>
                        <div className="bg-dark  p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow">
                            <div className="flex xl:flex-row flex-col items-center font-medium text-gray-900 dark:text-white pb-2 mb-2 xl:border-b border-gray-200 border-opacity-75 dark:border-gray-700 w-full">
                                <label htmlFor="number_tanda" className="pr-2">Número</label>
                                <input className="bg-dark w-full" type="number" name="number_tanda" onChange={handleChange} value={formData.number_tanda}/>
                            </div>
                        </div>
                        <div className="bg-dark  p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow">
                            <div className="flex xl:flex-row flex-col items-center font-medium text-gray-900 dark:text-white pb-2 mb-2 xl:border-b border-gray-200 border-opacity-75 dark:border-gray-700 w-full">
                                <label htmlFor="paraca_1" className="pr-2">Plaza</label>
                                <input className="bg-dark w-full" type="text" name="paraca_1" onChange={handleChange} value={formData.paraca_1}/>
                            </div>
                        </div>

                        <div className="bg-dark p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow">
                        <div className="flex xl:flex-row flex-col items-center font-medium text-gray-900 dark:text-white pb-2 mb-2 xl:border-b border-gray-200 border-opacity-75 dark:border-gray-700 w-full">
                            <label htmlFor="paraca_2" className="pr-2">Plaza</label>
                            <input className="bg-dark w-full" type="text" name="paraca_2" onChange={handleChange} value={formData.paraca_2}/>
                        </div>
                        </div>

                        <div className="bg-dark p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow">
                        <div className="flex xl:flex-row flex-col items-center font-medium text-gray-900 dark:text-white pb-2 mb-2 xl:border-b border-gray-200 border-opacity-75 dark:border-gray-700 w-full">
                            <label htmlFor="paraca_3" className="pr-2">Plaza</label>
                            <input className="bg-dark w-full" type="text" name="paraca_3" onChange={handleChange} value={formData.paraca_3}/>
                        </div>
                        </div>

                        <div className="bg-dark p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow">
                            <div className="flex xl:flex-row flex-col items-center font-medium text-gray-900 dark:text-white pb-2 mb-2 xl:border-b border-gray-200 border-opacity-75 dark:border-gray-700 w-full">
                                <label htmlFor="paraca_4" className="pr-2">Plaza</label>
                                <input className="bg-dark w-full" type="text" name="paraca_4" onChange={handleChange} value={formData.paraca_4}/>
                            </div>
                        </div>

                        <select name="pilot" className="bg-dark p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow" onChange={handleChange} value={formData.pilot}>
                            <option>PILOTO</option>
                            <option>Tano</option>
                            <option>Pilotito</option>
                            <option>Fer Lopez</option>
                            <option>Otro</option>
                        </select>

                        <select name="altitude" className="bg-dark p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow" onChange={handleChange} value={formData.altitude}>
                            <option>ALTURA</option>
                            <option>5k</option>
                            <option>10k</option>
                            <option>12k</option>
                        </select>

                        <select name="avion" className="bg-dark p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow" onChange={handleChange} value={formData.avion}>
                            <option>AVION</option>
                            <option>GRI</option>
                            <option>GYC</option>
                            <option>GSD</option>
                            <option>IFY</option>
                        </select>

                        <div className="flex justify-end">
                            <input class="bg-transparent hover:bg-active hover:text-white cursor-pointer font-semibold py-2 px-4 border border-blue-500 hover:border-transparent rounded mr-4" type="submit" value="Enviar"/>
                            <input class="bg-transparent hover:bg-active hover:text-white cursor-pointer font-semibold py-2 px-4 border border-gray-400 rounded shadow" type="reset" value="Reset" onClick={handleReset}/>
                        </div>
                </form>
            </div>
        </div>

    </div>
    </>

}

export default TandasForm