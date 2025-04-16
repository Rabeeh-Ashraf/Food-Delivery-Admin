import React from 'react'
import Navbar from '../../Admin/src/Components/Navbar/Navbar'
import Sidebar from '../../Admin/src/Components/Sidebar/Sidebar'
import {Routes,Route } from  'react-router-dom'
import Add from './Pages/Add/Add'
import Orders from './Pages/Orders/Orders'
import List from './Pages/List/List'
import { ToastContainer } from 'react-toastify';

const App = () => {
  const url = "http://localhost:4000"
  return (
    <div>
      <ToastContainer/>
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar/>
        <Routes>
          <Route path='/Add' element={<Add url={url}/>}/>
          <Route path='/List' element={<List url={url}/>}/>
          <Route path='/Orders' element={<Orders url={url}/>}/>

          </Routes> 
      </div>
    </div>
  )
}

export default App   