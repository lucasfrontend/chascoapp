import React from "react";
import SideBar from './SideBar'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return <>
        <div class="bg-bermuda dark:bg-gray-900 dark:text-white text-gray-600 h-screen flex overflow-hidden text-sm">
            <SideBar />
            <div class="flex-grow overflow-hidden h-full flex flex-col">
                <NavBar />
                <Outlet />
            </div>
        </div>

    </>

}

export default Layout