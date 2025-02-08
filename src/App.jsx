import React from 'react'
import { Route, Routes } from 'react-router-dom'    
import NavBar from './components/NavBar'
import LeftBar from './components/LeftBar'
import Home from './Pages/Home'
import Dashboard from './Pages/Dashboard'

const App = () => {
  return (
    <div className='h-screen'>
        <NavBar/>
        {/* <LeftBar/> */}
        <Routes>
            <Route path='/' element= {<Home/>} /> 
            <Route path='/dashboard' element= {<Dashboard/>} /> 

        </Routes>
    </div>
  )
}

export default App