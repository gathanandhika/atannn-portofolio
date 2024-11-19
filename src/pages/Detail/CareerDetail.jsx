import React from 'react'
import Navbar from '../../components/Navbar'
import CDetailHero from '../../components/CareerDetailPage/CDetailHero'
import Footer from '../../components/Footer'
import { useResetScroll } from '../../hooks/useResetScroll'

const CareerDetail = () => {
  useResetScroll();
  return (
    <div>
        <Navbar/>
      <div className="px-2 lg:px-28">
        <CDetailHero/>
      </div>
      <Footer/>
      
    </div>
  )
}

export default CareerDetail
