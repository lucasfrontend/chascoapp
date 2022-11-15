import React from "react";
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const HeaderTandas = ({ tandas }) => {
    return <>
            <div class=" p-3 flex w-full items-center">
                <div class="flex items-center text-3xl text-gray-900 dark:text-white">
                    <img src={logo} class="w-32 mr-1 rounded-full" alt="SDCH" />
                </div>
                <div class="ml-auto sm:flex hidden items-center justify-end">
                    <div class="text-right">
                        <div class="text-light text-gray-400 dark:text-gray-400">Tandas</div>
                        <div class="text-sdch text-lg dark:text-white">{ tandas.length }</div>
                    </div>
                    <a href="/table" target="_blank">
                        <button className="p-2 hover:bg-active text-sdch w-10 h-10 ml-4 text-light shadow dark:text-gray-400 rounded-full flex items-center justify-center border border-gray-200 dark:border-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clip-rule="evenodd"/>
                            </svg>
                        </button>
                    </a>
                </div>
            </div>

    </>

}

export default HeaderTandas