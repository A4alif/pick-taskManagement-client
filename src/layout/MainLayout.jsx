import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


const MainLayout = () => {
  return (
    <>
      <header className='bg-base-200'>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer className='bg-[#FDF8F7] mt-24'>
        <Footer />
      </footer>
      <ToastContainer />

    </>
  )
}

export default MainLayout