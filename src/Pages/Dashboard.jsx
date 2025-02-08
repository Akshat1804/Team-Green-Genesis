import React from 'react'
import LeftBar from '../components/LeftBar'

const Dashboard = () => {
  return (
    <div className='w-[100%]  bg-white shadow-lg mt-[2px] h-[90%]' >
    <LeftBar/>
      <div className='w-[100%] bg-slate-100 shadow-lg mt-[2px] h-[100%]'>
        <div className='flex gap-4 pl-[21%] w-[100%] h-[30%] p-10 '>
          <div className='w-[340px] h-[200px] bg-slate-300'>

          </div>
          <div className='w-[340px] h-[200px] bg-slate-300'>

          </div>
          <div className='w-[340px] h-[200px] bg-slate-300'>

          </div>
          <div className='w-[380px] h-[200px] bg-slate-300'>

          </div>

        </div>
        <div className='flex gap-4 pl-[21%] w-[100%] h-[30%] mt-20 '>
          <div className='w-[640px] h-[200px] bg-slate-300'>

          </div>

        </div>
      </div>
  
    </div>
  )
}

export default Dashboard