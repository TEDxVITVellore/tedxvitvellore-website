import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Nav from './components/Nav.js';
import Home from './components/Home';
import Melange from './components/Melange';
import Footer from './components/Footer';
import Events from './components/Events';
import Ripple from './components/Ripple';
import Envisage from './components/Envisage';
import Reunited from './components/Reunited';
import Divergent from './components/Divergent';
import Meraki from './components/Meraki';
import Countdown from './components/Countdown';
import Tedcircle from './components/Tedcircle';
import Aboutus from './components/Aboutus';
import Blogs from './components/Blogs';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>

        <div className="nonav">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/events" element={<Events/>}/>
            <Route path="/blogs" element={<Blogs/>}/>
            <Route path="/melange" element={<Melange/>}/>
            <Route path="/aboutus" element={<Aboutus/>}/>
            <Route path="/events/ripple" element={<Ripple/>}/>
            <Route path="/events/envisage" element={<Envisage/>}/>
            <Route path="/events/reunited" element={<Reunited/>}/>
            <Route path="/events/divergent" element={<Divergent/>}/>
            <Route path="/events/meraki" element={<Meraki/>}/>
            <Route path="/events/countdown" element={<Countdown/>}/>
            <Route path="/events/tedcircle" element={<Tedcircle/>}/>
          </Routes>
        </div>
        
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
