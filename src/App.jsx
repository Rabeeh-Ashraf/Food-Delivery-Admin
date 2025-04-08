import React from 'react'
import Navbar from '../../Admin/src/Components/Navbar/Navbar'
import Sidebar from '../../Admin/src/Components/Sidebar/Sidebar'

const App = () => {
  return (
    <div>
  <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar/>
      </div>
    </div>
  )
}

export default App   