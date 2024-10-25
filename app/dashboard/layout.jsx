import React from 'react'
import Header from './_component/Header'
import SideNav from './_component/SideNav'

function DashboardLayout({children}) {
  return (
    <div>
        <div className='hidden md:block h-screen bg-white fixed mt-[70px] w-64'>
            <SideNav/>
        </div>
        <div>
            <Header/>
        <div className='md:ml-64 p-10'>
            {children}
        </div>
        </div>
    </div>
  )
}

export default DashboardLayout
