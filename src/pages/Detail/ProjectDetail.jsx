import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PDetailHero from "../../components/ProjectDetailPage/PDetailHero";
import PDetailMockup from "../../components/ProjectDetailPage/PDetailMockup";
import PDetailDisplay from "../../components/ProjectDetailPage/PDetailDisplay";
import PDetailTypograph from "../../components/ProjectDetailPage/PDetailTypograph";
import { useResetScroll } from "../../hooks/useResetScroll";

const ProjectDetail = () => {
  useResetScroll();
  return (
    <div className="project-detail">
      <Navbar/>
      <div className="px-2 lg:px-28">
      <PDetailHero/>
      </div>
      <PDetailMockup/>
      <PDetailDisplay/>
      <PDetailTypograph/>
      <Footer/>
    </div>
  );
};

export default ProjectDetail;
