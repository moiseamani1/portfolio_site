import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Portfolio from './components/Portfolio/Portfolio';
import Sections from './components/Sections/Sections';

function App() {
  
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/">
          <div className="main">
          <Home></Home>
          <About></About>
          <Experience></Experience>
          <Portfolio></Portfolio>
          <Contact></Contact>
          </div>
         
        </Route>

        {/* <Route exact path="/about">
          <About></About>
        </Route>

        <Route exact path="/portfolio">
          <Portfolio></Portfolio>
        </Route>

        <Route exact path="/contact">
          <Contact></Contact>
        </Route> */}





      </Switch>

    </Router>
  );
}

export default App;
