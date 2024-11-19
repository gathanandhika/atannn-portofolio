import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import WorkHeroDev from '../components/WorkPageDev/WorkHeroDev'
import { useResetScroll } from '../hooks/useResetScroll';

const WorkDev = () => {
    useResetScroll();
  return (
    <div>

      <Navbar/>

      <div className='lg:px-28 lg:pb-32'>
      <WorkHeroDev/>
      </div>
      <Footer/>
    </div>
  )
}

export default WorkDev
