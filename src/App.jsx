// App.jsx
import Home from './pages/Home';
import ProjectDetail from './pages/Detail/ProjectDetail';
import WorkList from './pages/Work';
import About from './pages/About';
import Contact from './pages/Contact';
import Career from './pages/Career';
import CareerDetail from './pages/Detail/CareerDetail';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate  } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import LocomotiveScrollProvider from './components/LocomotiveScrollProvider';
import WorkHeroDev from './components/WorkPageDev/WorkHeroDev';
import WorkDev from './pages/WorkDev';
import WorkDesign from './pages/WorkDesign';
import CareerWork from './pages/CareerWork';
import CareerIntern from './pages/CareerIntern';
import CareerOrg from './pages/CareerOrg';
import CareerSC from './pages/CareerSC';
import { useLocomotive } from './hooks/useLocomotive';
import PreLoader from './components/PreLoader/PreLoader';
import PageTransition from './components/PageTransition/PageTransition';

const ScrollToTop = () => {
  const location = useLocation();
  const locomotiveRef = useLocomotive();
  
  useEffect(() => {
    // Reset scroll untuk window normal
    window.scrollTo(0, 0);
    
    // Reset scroll untuk Locomotive Scroll
    if (locomotiveRef) {
      locomotiveRef.scrollTo(0, { duration: 0, disableLerp: true });
    }
  }, [location, locomotiveRef]);

  return null;
};

const AppContent = () => {
  return (
    <LocomotiveScrollProvider>
      <div className='overflow-x-hidden text-zinc-900 antialiased selection:bg-indigo-600 selection:text-white'>
        <PageTransition />
        <div className="container mx-auto">
          <ScrollToTop />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects/:title' element={<ProjectDetail />} />
            <Route path='/work' element={<WorkList />} />
            <Route path='/work-dev' element={<WorkDev />} />
            <Route path='/work-design' element={<WorkDesign />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/career' element={<Career />} />
            <Route path='/career-work' element={<CareerWork />} />
            <Route path='/career-intern' element={<CareerIntern />} />
            <Route path='/career-organization' element={<CareerOrg />} />
            <Route path='/career-sc' element={<CareerSC />} />
            <Route path='/experience/:company' element={<CareerDetail />} />
          </Routes>
        </div>
      </div>
    </LocomotiveScrollProvider>
  );
};

const App = () => {
  return (
    <>
      <PreLoader />
      <ParallaxProvider>
        <Router>
          <AppContent />
        </Router>
      </ParallaxProvider>
    </>
  );
};

export default App;