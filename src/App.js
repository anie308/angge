import React from 'react';
import { Navbar } from './components';
import Home from './pages/HomePage/Home'
import GlobalStyle from './globalStyles';
import About from './pages/AboutPage/About';
import Small from './pages/Small/Small';
import Services from './pages/Services/Services'






function App() {
  return (

   <>
     <GlobalStyle/>
      <Navbar />
      <Home />
      <About/>
      <Small/>
      <Services/>
   </>

      
  );
}

export default App;
