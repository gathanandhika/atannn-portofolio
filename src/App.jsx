// App.jsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import ProjectDetail from './pages/Detail/ProjectDetail';
import WorkList from './pages/Work';
import About from './pages/About';
import Contact from './pages/Contact';
import Career from './pages/Career';
import CareerDetail from './pages/Detail/CareerDetail';
import WorkDev from './pages/WorkDev';
import WorkDesign from './pages/WorkDesign';
import CareerWork from './pages/CareerWork';
import CareerIntern from './pages/CareerIntern';
import CareerOrg from './pages/CareerOrg';
import CareerSC from './pages/CareerSC';
import { useLocomotive } from './hooks/useLocomotive';
import PreLoader from './components/PreLoader/PreLoader';
import PageTransition from './components/PageTransition/PageTransition';
import { ParallaxProvider } from 'react-scroll-parallax';
import LocomotiveScrollProvider from './components/LocomotiveScrollProvider';
import ScrollToTop from './components/ScrollToTop';



// Component untuk mengatur title halaman berdasarkan rute
const TitleUpdater = () => {
  const location = useLocation();

  useEffect(() => {
    console.log('LocomotiveScroll initialized:', window.locomotiveScroll);
  }, []);
  
  useEffect(() => {
    if (window.locomotiveScroll) {
      window.locomotiveScroll.update();
    }
  }, [location]); 
  
  useEffect(() => {
    // Ganti title sesuai dengan rute yang sedang aktif
    switch (location.pathname) {
      case '/':
        document.title = "Atannn";
        break;
      case '/projects/:title':
        document.title = 'Work - Atannn';
        break;
      case '/work':
        document.title = 'Work - Atannn';
        break;
      case '/work-dev':
        document.title = 'Work - Atannn';
        break;
      case '/work-design':
        document.title = 'Work - Atannn';
        break;
      case '/about':
        document.title = 'About - Atannn';
        break;
      case '/contact':
        document.title = 'Contact - Atannn';
        break;
      case '/career':
        document.title = 'Career - Atannn';
        break;
      case '/career-work':
        document.title = 'Career - Atannn';
        break;
      case '/career-intern':
        document.title = 'Career - Atannn';
        break;
      case '/career-organization':
        document.title = 'Career - Atannn';
        break;
      case '/career-sc':
        document.title = 'Career - Atannn';
        break;
      case '/experience/:company':
        document.title = 'Career - Atannn';
        break;
      default:
        document.title = 'Gathan Andhika'; // Default title
    }
  }, [location]); // Jalankan efek setiap kali lokasi berubah
  
  return null;
};


const AppContent = () => {
  return (
      <div data-scroll-container className='overflow-x-hidden text-zinc-900 antialiased selection:bg-indigo-600 selection:text-white'>
        <PageTransition />
        <div className="mx-auto">
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
  );
};

const App = () => {
  return (
    <>
      <PreLoader />
      <LocomotiveScrollProvider>
      <ParallaxProvider>
        <Router>
          {/* Update title setiap kali rute berubah */}
          <TitleUpdater />
          <AppContent />
        </Router>
      </ParallaxProvider>
      </LocomotiveScrollProvider>

    </>
  );
};

export default App;
