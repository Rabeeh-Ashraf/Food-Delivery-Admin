import React from 'react'
import Navbar from '../../Admin/src/Components/Navbar/Navbar'
import Sidebar from '../../Admin/src/Components/Sidebar/Sidebar'
import {Routes,Route } from  'react-router-dom'
import Add from './Pages/Add/Add'
import Orders from './Pages/Orders/Orders'
import List from './Pages/List/List'

const App = () => {
  return (
    <div>
  <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar/>
        <Routes>
          <Route path='/Add' element={<Add/>}/>
          <Route path='/List' element={<List/>}/>
          <Route path='/Orders' element={<Orders/>}/>

          </Routes> 
      </div>
    </div>
  )
}

export default App   