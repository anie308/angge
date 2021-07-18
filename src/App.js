import React from 'react';
import { Navbar } from './components';
import Home from './pages/HomePage/Home'
import  {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import GlobalStyle from './globalStyles';
import About from './pages/AboutPage/About';






function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Navbar/>
      <Home/>
      <About/>
      {/* <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/about' exact component={About}/>
        
      </Switch> */}
    </Router>
  );
}

export default App;
