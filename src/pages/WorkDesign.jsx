import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import WorkHeroDesign from '../components/WorkPageDesign/WorkHeroDesign'
import { useResetScroll } from '../hooks/useResetScroll';

const WorkDesign = () => {
    useResetScroll();
  return (
    <div>

      <Navbar/>

      <div className='lg:px-28 lg:pb-32'>
      <WorkHeroDesign/>
      </div>
      <Footer/>
    </div>
  )
}

export default WorkDesign
