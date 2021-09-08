import React from 'react'
import "tailwindcss/tailwind.css"
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './components/pages/Home';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Home />
      <Switch>
        <Route path='/' exact component={Home}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
