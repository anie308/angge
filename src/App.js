import React from 'react';
import { Navbar } from './components';
import Home from './pages/HomePage/Home'
import  {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import GlobalStyle from './globalStyles';
import About from './pages/AboutPage/About';
import Small from './pages/Small/Small';






function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Navbar/>
      <Home/>
      <About/>
      <Small/>

      
    </Router>
  );
}

export default App;
