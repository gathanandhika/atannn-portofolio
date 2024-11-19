import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import WorkHero from '../components/WorkPage/WorkHero'
import { useResetScroll } from '../hooks/useResetScroll';

const Work = () => {
  useResetScroll();
  return (
    <div>

      <Navbar/>

      <div className='lg:px-28 lg:pb-32'>
      <WorkHero/>
      </div>
      <Footer/>
    </div>
  )
}

export default Work
