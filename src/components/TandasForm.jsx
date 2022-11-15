import React, { useEffect, useState } from "react";


// const pilots = ['Tano,', 'Pilotito', 'Fer Lopez', 'Otro']

const TandasForm = ({ addTanda, editTanda, editData }) => {
    const [formData, setFormData] = useState({
        id: null,
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
            setFormData(editData)
        }else {
            setFormData({
                id: null,
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
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
            if(editData !== null) {
                editTanda(formData)
            } else {
                formData.id = Date.now()
                addTanda(formData)
                setFormData({
                    id: null,
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

    return <>
            <div class="bg-maincl text-sdch xl:w-72 w-48 flex-shrink-0 border-r border-gray-200 dark:border-gray-800 h-full overflow-y-auto lg:block hidden p-5">
                <h3 value={formData.id}>{formData.id}</h3>
              <form className="space-y-4 mt-3" onSubmit={handleSubmit}>
                    <div class="bg-dark p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow">
                        <div class="flex xl:flex-row flex-col items-center font-medium text-gray-900 dark:text-white pb-2 mb-2 xl:border-b border-gray-200 border-opacity-75 dark:border-gray-700 w-full">
                            <label htmlFor="paraca_1">Plaza I</label>
                            <input className="bg-dark" type="text" name="paraca_1" onChange={handleChange} value={formData.paraca_1}/>
                        </div>
                    </div>

                    <div class="bg-dark p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow">
                    <div class="flex xl:flex-row flex-col items-center font-medium text-gray-900 dark:text-white pb-2 mb-2 xl:border-b border-gray-200 border-opacity-75 dark:border-gray-700 w-full">
                        <label htmlFor="paraca_2">Plaza II</label>
                        <input className="bg-dark" type="text" name="paraca_2" onChange={handleChange} value={formData.paraca_2}/>
                    </div>
                    </div>

                    <div class="bg-dark p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow">
                    <div class="flex xl:flex-row flex-col items-center font-medium text-gray-900 dark:text-white pb-2 mb-2 xl:border-b border-gray-200 border-opacity-75 dark:border-gray-700 w-full">
                        <label htmlFor="paraca_3">Plaza III</label>
                        <input className="bg-dark" type="text" name="paraca_3" onChange={handleChange} value={formData.paraca_3}/>
                    </div>
                    </div>

                    <div class="bg-dark p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow">
                        <div class="flex xl:flex-row flex-col items-center font-medium text-gray-900 dark:text-white pb-2 mb-2 xl:border-b border-gray-200 border-opacity-75 dark:border-gray-700 w-full">
                            <label htmlFor="paraca_4">Plaza IV</label>
                            <input className="bg-dark" type="text" name="paraca_4" onChange={handleChange} value={formData.paraca_4}/>
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
                        <option>avion 1</option>
                        <option>avion 2</option>
                        <option>avion 3</option>
                    </select>

                    <input class="bg-transparent hover:bg-active hover:text-white cursor-pointer font-semibold py-2 px-4 border border-blue-500 hover:border-transparent rounded" type="submit" value="Enviar"/>
                    <input class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" type="reset" value="Cancelar"/>
              </form>
              <div class="text-xs text-gray-400 tracking-wider">USERS</div>
              <div class="relative mt-2">
                <input type="text" class="pl-8 h-9 bg-transparent border border-gray-300 dark:border-gray-700 dark:text-white w-full rounded-md text-sm" placeholder="Search" />
                <svg viewBox="0 0 24 24" class="w-4 absolute text-gray-400 top-1/2 transform translate-x-0.5 -translate-y-1/2 left-2" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
            </div>

    </>

}

export default TandasForm