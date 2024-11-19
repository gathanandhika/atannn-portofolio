import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CareerWorkHero from '../components/CareerPageWork/CareerWorkHero'
import { useResetScroll } from '../hooks/useResetScroll'

const CareerWork = () => {
    useResetScroll();
  return (
    <div>
        <Navbar/>
        <div className='lg:px-28'>
        <CareerWorkHero/>
        </div>
        <Footer/>
    </div>
  )
}

export default CareerWork
