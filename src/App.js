import React from 'react';
import { Navbar } from './components';
import Home from './pages/HomePage/Home'
import GlobalStyle from './globalStyles';
import About from './pages/AboutPage/About';
import Small from './pages/Small/Small';
import Services from './pages/Services/Services'
import Portfolio from './pages/Portfolio/Portfolio';
import Reviews from './pages/Reviews/Reviews';
import Team from './pages/Team/Team';
import Contact from './pages/Contact/Contact';
import Footer from './pages/Footer/Footer';






function App() {
  return (

   <>
     <GlobalStyle/>
      <Navbar />
      <Home />
      <About/>
      <Small/>
      <Services/>
      <Portfolio/>
      <Reviews/>
      <Contact/>
      <Team/>
      <Footer/>
   </>

      
  );
}

export default App;
