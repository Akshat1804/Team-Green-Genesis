import React from 'react'

const NavBar = () => {
  return (
    <div>
        <nav className='w-full bg-white h-[10%] flex justify-between items-center p-5    shadow-lg'>

            <h1>Logo</h1>

            <div className='flex items-center space-x-5'>
                <i className="fa-solid fa-bell"> <label ></label></i>
                <h1>User <i className="fa-solid fa-profile"></i></h1>
                <i className="fa-solid fa-angle-down"></i>
            </div>

        </nav>

    </div>
  )
}

export default NavBar