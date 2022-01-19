import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Portfolio from './components/Portfolio/Portfolio';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Open Sans',
       'Roboto',
       'Arial',
       'sans-serif'
    ]
    .join(','),
  }
});

theme = responsiveFontSizes(theme);


function App() {
  
  return (
    <ThemeProvider theme={theme}>
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
      </Switch>

    </Router>
    </ThemeProvider>
    
  );
}

export default App;
