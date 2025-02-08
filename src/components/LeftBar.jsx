import React from 'react'
import { Link } from 'react-router-dom'

const LeftBar = () => {
  return (
    <div className='w-[20%] bg-white shadow-lg mt-[2px] h-[96%] fixed '>
         
        <Link className='flex  items-start w-full mx-[90px] justify-start pt-20 space-x-2'>
        <i className="fa-solid fa-house"></i>
        <h1>Dashboard</h1>
        </Link>
        <Link className='flex  items-start w-full mx-[90px] justify-start pt-12 space-x-2'>
        <i className="fa-solid fa-calculator"></i>
        <h1>Calculator</h1>
        </Link>
        <Link className='flex  items-start w-full mx-[90px] justify-start pt-12 space-x-2'>
        <i className="fa-solid fa-map-location-dot"></i>
        <h1>Map</h1>
        </Link>
        <Link className='flex  items-start w-full mx-[90px] justify-start pt-12 space-x-2'>
        <i className="fa-solid fa-star"></i>
        <h1>Eco Score</h1>
        </Link>
        <Link className='flex  items-start w-full mx-[90px] justify-start pt-12 space-x-2'>
        <i className="fa-solid fa-question"></i>
        <h1>Quiz</h1>
        </Link>
        <Link className='flex  items-start w-full mx-[90px] justify-start pt-12 space-x-2'>
        <i className="fa-solid fa-gamepad"></i>
        <h1>Game</h1>
        </Link>
        

    </div>
  )
}

export default LeftBar