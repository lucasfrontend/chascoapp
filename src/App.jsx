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
