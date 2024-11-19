import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CareerOrgHero from '../components/CareerPageOrganization/CareerOrgHero'
import { useResetScroll } from '../hooks/useResetScroll'

const CareerOrg = () => {
    useResetScroll();
  return (
    <div>
        <Navbar/>
        <div className='lg:px-28'>
        <CareerOrgHero/>
        </div>
        <Footer/>
    </div>
  )
}

export default CareerOrg
