import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CareerInternHero from '../components/CareerPageIntern/CareerInternHero'
import { useResetScroll } from '../hooks/useResetScroll'

const CareerIntern = () => {
    useResetScroll();
  return (
    <div>
        <Navbar/>
        <div className='lg:px-28'>
        <CareerInternHero/>
        </div>
        <Footer/>
    </div>
  )
}

export default CareerIntern
