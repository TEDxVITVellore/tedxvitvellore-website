import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Nav from './components/Nav.js';
import Home from './components/Home';
import Melange from './components/Melange';
import Footer from './components/Footer';
import Allevents from './components/Allevents';
import Ripple from './components/Ripple';
import Envisage from './components/Envisage';
import Reunited from './components/Reunited';
import Divergent from './components/Divergent';
import Meraki from './components/Meraki';
import Countdown from './components/Countdown';
import Tedcircle from './components/Tedcircle';
import Aboutus from './components/Aboutus';
import Blogs from './components/Blogs';
import Event from './components/Event';
import Events from './components/Events';
import Notfound from './components/Notfound';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>

        <div className="nonav">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/event" element={<Events/>}>
              <Route path=":eventName" element={<Event/>}/>
            </Route>
            <Route path="/events" element={<Allevents/>}/>
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
            <Route path="/notfound" element={<Notfound/>}/>
            <Route path="*" element={<Notfound/>}/>
          </Routes>
        </div>
        
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
