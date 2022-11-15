import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TandasMain from './components/TandasMain'
import TableScreen from './components/dumbComponents/TableScreen'
import SideBar from './components/SideBar'
import NavBar from './components/NavBar'
import Page404 from './components/Page404'
import Beer from './components/Beer'
import Layout from './components/Layout'
import './App.css'


/*
        <div class="bg-bermuda dark:bg-gray-900 dark:text-white text-gray-600 h-screen flex overflow-hidden text-sm">
        <SideBar />
          <div class="flex-grow overflow-hidden h-full flex flex-col">
            <NavBar />
            <Routes>
              <Route path='/home' element={<TandasMain />} /> 
              <Route path='/beer' element={<Beer />}/>
              <Route path='*' element={<Page404 />} />
            </Routes>
          </div>
        </div>
*/
function App() {

  return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/home' element={<TandasMain />} /> 
          <Route path='/beer' element={<Beer />}/>
          <Route path='*' element={<Page404 />} />
        </Route>
        <Route path='/table' element={<TableScreen />}></Route>
      </Routes>
      </BrowserRouter>
  )
}

export default App
