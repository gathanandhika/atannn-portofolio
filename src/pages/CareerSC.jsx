import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CareerSCHero from '../components/CareerPageSC/CareerSCHero'
import { useResetScroll } from '../hooks/useResetScroll'

const CareerSC = () => {
    useResetScroll();
  return (
    <div>
        <Navbar/>
        <div className='lg:px-28'>
        <CareerSCHero/>
        </div>
        <Footer/>
    </div>
  )
}

export default CareerSC
