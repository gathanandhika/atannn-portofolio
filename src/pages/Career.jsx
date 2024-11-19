import React from 'react'
import CareerHero from '../components/CareerPage/CareerHero'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useResetScroll } from '../hooks/useResetScroll'

const Career = () => {
  useResetScroll();
  return (
    <div>
        <Navbar/>
        <div className='lg:px-28 '>
        <CareerHero/>
        </div>
        <Footer/>
    </div>
  )
}

export default Career
