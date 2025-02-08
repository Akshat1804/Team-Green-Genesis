import React from 'react'
import { Route, Routes } from 'react-router-dom'    
import NavBar from './components/NavBar'
import Dashboard from './Pages/Dashboard'
import AuthPage from './Auth/Authpage'

const App = () => {
  return (
    <div className='h-screen'>
        <NavBar/>
        <Routes>
            <Route path='/'element={<AuthPage/>} />
            <Route path='/dashboard' element= {<Dashboard/>} /> 

        </Routes>
    </div>
  )
}

export default App
